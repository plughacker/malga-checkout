import {
  Component,
  Host,
  h,
  Prop,
  State,
  Event,
  EventEmitter,
  Fragment,
} from '@stencil/core'

import {
  clearEmptyObjectProperties,
  clearedObjectProperties,
} from '@plug-checkout/utils'

import settings from '../../stores/settings'
import payment from '../../stores/payment'

import {
  PaymentMethods,
  PaymentMethodsType,
  PlugPaymentsChargeError,
  PlugPaymentsChargeSuccess,
} from '../plug-payments/plug-payments.types'

import { PlugCheckoutService } from './plug-checkout.service'

import {
  PlugCheckoutPaymentMethods,
  PlugCheckoutTransaction,
  PlugCheckoutDialog,
} from './plug-checkout.types'
import credit from '../../stores/credit'

@Component({
  tag: 'plug-checkout',
  styleUrl: 'plug-checkout.scss',
})
export class PlugCheckout {
  @Prop() clientId: string
  @Prop() publicKey: string
  @Prop() idempotencyKey: string
  @Prop() merchantId: string
  @Prop() sandbox = false
  @Prop() dialogConfig: PlugCheckoutDialog = {
    show: true,
    actionButtonLabel: 'Continuar',
    successActionButtonLabel: 'Continuar',
    errorActionButtonLabel: 'Tentar Novamente',
    successRedirectUrl: '',
  }
  @Prop() paymentMethods: PlugCheckoutPaymentMethods = {
    pix: undefined,
    credit: undefined,
    boleto: undefined,
  }
  @Prop() transactionConfig: PlugCheckoutTransaction = {
    statementDescriptor: '',
    amount: 0,
    description: '',
    orderId: '',
    customerId: '',
    currency: 'BRL',
    capture: false,
    customer: null,
    fraudAnalysis: null,
  }

  @Event() paymentSuccess!: EventEmitter<{
    data: PlugPaymentsChargeSuccess
  }>
  @Event() paymentFailed!: EventEmitter<{
    error: PlugPaymentsChargeError
  }>

  @State() isLoading = false

  private handleCreditValidations = () => {
    const validations = Object.values(credit.validations.fields)
    const untouchedFields = validations.filter((field) => field === null)
    const fieldsWithoutErrors = validations.filter((field) => !!field)

    if (!untouchedFields.length && !fieldsWithoutErrors.length) {
      return false
    }

    return true
  }

  private handleSavedCardValidations = () => {
    if (payment.cvv.length >= 3 && payment.cardId) {
      return false
    }

    return true
  }

  private handlePixValidations = () => false

  private handleBoletoValidations = () => false

  private handleUnselectPaymentMethodValidations = () => true

  private handleDisablePayButton = () => {
    const paymentMethodsOptions = {
      credit: this.handleCreditValidations,
      savedCard: this.handleSavedCardValidations,
      pix: this.handlePixValidations,
      boleto: this.handleBoletoValidations,
      default: this.handleUnselectPaymentMethodValidations,
    }

    if (payment.isSelectedSavedCard) {
      return paymentMethodsOptions.savedCard()
    }

    return paymentMethodsOptions[payment.selectedPaymentMethod || 'default']()
  }

  private showCurrentPaymentMethod = (paymentMethod: PaymentMethodsType) => {
    const paymentMethods = Object.keys(this.paymentMethods)

    const showPaymentMethod = paymentMethods.includes(paymentMethod)

    return paymentMethods.length === 1 && showPaymentMethod
  }

  private handlePay = async () => {
    try {
      this.isLoading = true

      const plugCheckoutService = new PlugCheckoutService({
        onPaymentSuccess: (data) => this.paymentSuccess.emit({ data }),
        onPaymentFailed: (error) => this.paymentFailed.emit({ error }),
      })

      await plugCheckoutService.pay()

      this.isLoading = false
    } catch (err) {
      this.isLoading = false
    }
  }

  private handleStoreSettings = () => {
    settings.clientId = this.clientId
    settings.publicKey = this.publicKey
    settings.merchantId = this.merchantId
    settings.idempotencyKey = this.idempotencyKey
    settings.sandbox = this.sandbox
    settings.dialogConfig = this.dialogConfig
    settings.paymentMethods = this.paymentMethods
    settings.transactionConfig = this.transactionConfig
  }

  private handleStoreCurrentPaymentMethod = () => {
    const paymentMethods = clearEmptyObjectProperties(this.paymentMethods)

    if (paymentMethods.length === 1) {
      const [[currentPaymentMethod]] = paymentMethods
      payment.selectedPaymentMethod = currentPaymentMethod
    }
  }

  componentWillLoad() {
    this.handleStoreSettings()
    this.handleStoreCurrentPaymentMethod()
  }

  render() {
    const paymentMethods = clearedObjectProperties(this.paymentMethods)

    return (
      <Host class={{ 'plug-checkout__container': true }}>
        <section class={{ 'plug-checkout__content': true }}>
          {paymentMethods.length > 1 && (
            <plug-payments
              paymentMethods={paymentMethods as PaymentMethods}
              onPaymentFail={({ detail: { error } }) =>
                this.paymentFailed.emit({ error })
              }
            />
          )}

          {this.showCurrentPaymentMethod('credit') && (
            <Fragment>
              {settings.transactionConfig.customerId && (
                <plug-payments-credit-saved-cards />
              )}
              <plug-payments-credit />
            </Fragment>
          )}

          {this.showCurrentPaymentMethod('boleto') && <plug-payments-boleto />}

          {this.showCurrentPaymentMethod('pix') && (
            <plug-payments-pix
              onPixPaymentFailed={({ detail: { error } }) =>
                this.paymentFailed.emit({ error })
              }
            />
          )}

          <div class={{ 'plug-checkout__submit': true }}>
            <checkout-button
              isLoading={this.isLoading}
              label="Pagar"
              disabled={this.handleDisablePayButton()}
              onClicked={this.handlePay}
            />
            <checkout-icon icon="poweredByPlug" />
          </div>
        </section>
      </Host>
    )
  }
}
