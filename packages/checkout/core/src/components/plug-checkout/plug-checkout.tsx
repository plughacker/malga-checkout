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

import settings from '../../stores/settings'

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

@Component({
  tag: 'plug-checkout',
  styleUrl: 'plug-checkout.scss',
})
export class PlugCheckout {
  @Prop() clientId: string
  @Prop() publicKey: string
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
  }

  @Event() paymentSuccess!: EventEmitter<{
    data: PlugPaymentsChargeSuccess
  }>
  @Event() paymentFailed!: EventEmitter<{
    error: PlugPaymentsChargeError
  }>

  @State() isLoading = false

  private showCurrentPaymentMethod = (paymentMethod: PaymentMethodsType) => {
    const paymentMethods = Object.keys(this.paymentMethods)

    const showPaymentMethod = paymentMethods.includes(paymentMethod)

    return paymentMethods.length === 1 && showPaymentMethod
  }

  private handlePay = async () => {
    this.isLoading = true

    const plugCheckoutService = new PlugCheckoutService({
      onPaymentSuccess: (data) => this.paymentSuccess.emit({ data }),
      onPaymentFailed: (error) => this.paymentFailed.emit({ error }),
    })

    await plugCheckoutService.pay()

    this.isLoading = false
  }

  private handleStoreSettings = () => {
    settings.clientId = this.clientId
    settings.publicKey = this.publicKey
    settings.merchantId = this.merchantId
    settings.sandbox = this.sandbox
    settings.dialogConfig = this.dialogConfig
    settings.paymentMethods = this.paymentMethods
    settings.transactionConfig = this.transactionConfig
  }

  componentWillLoad() {
    this.handleStoreSettings()
  }

  render() {
    const paymentMethods = Object.keys(this.paymentMethods)

    return (
      <Host class={{ 'plug-checkout__container': true }}>
        <section class={{ 'plug-checkout__content': true }}>
          {paymentMethods.length > 1 && (
            <plug-payments paymentMethods={paymentMethods as PaymentMethods} />
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

          {this.showCurrentPaymentMethod('pix') && <plug-payments-pix />}

          <div class={{ 'plug-checkout__submit': true }}>
            <checkout-button
              isLoading={this.isLoading}
              label="Pagar"
              disabled={this.isLoading}
              onClick={this.handlePay}
            />
            <checkout-icon icon="poweredByPlug" />
          </div>
        </section>
      </Host>
    )
  }
}
