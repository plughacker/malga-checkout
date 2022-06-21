import {
  Component,
  Host,
  h,
  Prop,
  State,
  Event,
  EventEmitter,
  Fragment,
  Watch,
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

import { handleDisablePayButton } from './plug-checkout.utils'
@Component({
  tag: 'plug-checkout',
  styleUrl: 'plug-checkout.scss',
})
export class PlugCheckout {
  readonly plugCheckoutService: PlugCheckoutService

  @Prop() clientId?: string
  @Prop() publicKey?: string
  @Prop() idempotencyKey: string
  @Prop() paymentSessionKey?: string
  @Prop() merchantId?: string
  @Prop() sandbox = false
  @Prop() dialogConfig: PlugCheckoutDialog = {
    show: true,
    actionButtonLabel: 'Continuar',
    successActionButtonLabel: 'Continuar',
    errorActionButtonLabel: 'Tentar Novamente',
    successRedirectUrl: '',
  }
  @Prop() paymentMethods?: PlugCheckoutPaymentMethods = {
    pix: undefined,
    credit: undefined,
    boleto: undefined,
  }
  @Prop() transactionConfig?: PlugCheckoutTransaction = {
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

  @State() isButtonLoading = false

  @State() isLoading = true

  @Watch('transactionConfig')
  protected handleWatchTransactionConfig() {
    settings.transactionConfig = this.transactionConfig
  }

  constructor() {
    this.plugCheckoutService = new PlugCheckoutService({
      onPaymentSuccess: (data) => this.paymentSuccess.emit({ data }),
      onPaymentFailed: (error) => this.paymentFailed.emit({ error }),
    })
  }

  private showCurrentPaymentMethod = (paymentMethod: PaymentMethodsType) => {
    const paymentMethods = Object.keys(settings.paymentMethods)

    const showPaymentMethod = paymentMethods.includes(paymentMethod)

    return paymentMethods.length === 1 && showPaymentMethod
  }

  private handlePay = async () => {
    try {
      this.isButtonLoading = true

      await this.plugCheckoutService.pay()

      this.isButtonLoading = false
    } catch (err) {
      this.isButtonLoading = false
    }
  }

  private handleStoreSettings = async () => {
    settings.paymentSessionKey = this.paymentSessionKey
    settings.dialogConfig = this.dialogConfig
    settings.sandbox = this.sandbox
    settings.idempotencyKey = this.idempotencyKey
    settings.clientId = this.clientId
    settings.publicKey = this.publicKey
    settings.merchantId = this.merchantId
    settings.paymentMethods = this.paymentMethods
    settings.transactionConfig = this.transactionConfig

    await this.plugCheckoutService.getPaymentSession()

    this.isLoading = false
    this.handleStoreCurrentPaymentMethod()
  }

  private handleStoreCurrentPaymentMethod = () => {
    const paymentMethods = clearEmptyObjectProperties(settings.paymentMethods)

    if (paymentMethods.length === 1) {
      const [[currentPaymentMethod]] = paymentMethods
      payment.selectedPaymentMethod = currentPaymentMethod
    }
  }

  componentWillLoad() {
    this.handleStoreSettings()
  }

  render() {
    const paymentMethods = clearedObjectProperties(settings.paymentMethods)

    if (this.isLoading) {
      return <p>Carregando...</p>
    }

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
              isLoading={this.isButtonLoading}
              label="Pagar"
              disabled={handleDisablePayButton()}
              onClicked={this.handlePay}
            />
            <checkout-icon icon="poweredByPlug" />
          </div>
        </section>
      </Host>
    )
  }
}
