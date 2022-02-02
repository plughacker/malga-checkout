import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core'

import settings from '../../stores/settings'

import {
  PaymentMethods,
  PaymentMethodsType,
  PlugPaymentsChargeError,
  PlugPaymentsChargeSuccess,
} from '../plug-payments/plug-payments.types'

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

  private showCurrentPaymentMethod = (paymentMethod: PaymentMethodsType) => {
    const paymentMethods = Object.keys(this.paymentMethods)

    const showPaymentMethod = paymentMethods.includes(paymentMethod)

    return paymentMethods.length === 1 && showPaymentMethod
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
            <plug-payments
              publicKey={this.publicKey}
              clientId={this.clientId}
              merchantId={this.merchantId}
              customer={this.transactionConfig.customer}
              customerId={this.transactionConfig.customerId}
              statementDescriptor={this.transactionConfig.statementDescriptor}
              amount={this.transactionConfig.amount}
              capture={this.transactionConfig.capture}
              orderId={this.transactionConfig.orderId}
              currency={this.transactionConfig.currency}
              description={this.transactionConfig.description}
              showCreditCard={
                this.paymentMethods.credit
                  ? this.paymentMethods.credit.showCreditCard
                  : false
              }
              boleto={this.paymentMethods.boleto}
              pix={this.paymentMethods.pix}
              installments={this.paymentMethods.credit.installments}
              sandbox={this.sandbox}
              paymentMethods={paymentMethods as PaymentMethods}
              dialogConfig={this.dialogConfig}
              onCheckoutPaymentSuccess={({ detail: { data } }) =>
                this.paymentSuccess.emit({ data })
              }
              onCheckoutPaymentFailed={({ detail: { error } }) =>
                this.paymentFailed.emit({ error })
              }
            />
          )}

          {this.showCurrentPaymentMethod('boleto') && (
            <plug-payments-boleto
              dialogConfig={this.dialogConfig}
              clientId={this.clientId}
              publicKey={this.publicKey}
              merchantId={this.merchantId}
              statementDescriptor={this.transactionConfig.statementDescriptor}
              amount={this.transactionConfig.amount}
              customer={this.transactionConfig.customer}
              customerId={this.transactionConfig.customerId}
              orderId={this.transactionConfig.orderId}
              currency={this.transactionConfig.currency}
              description={this.transactionConfig.description}
              sandbox={this.sandbox}
              capture={this.transactionConfig.capture}
              boleto={this.paymentMethods.boleto}
              onBoletoPaymentSuccess={({ detail: { data } }) =>
                this.paymentSuccess.emit({ data })
              }
              onBoletoPaymentFailed={({ detail: { error } }) =>
                this.paymentFailed.emit({ error })
              }
            />
          )}

          {this.showCurrentPaymentMethod('pix') && (
            <plug-payments-pix
              onPixPaymentSuccess={({ detail: { data } }) =>
                this.paymentSuccess.emit({ data })
              }
              onPixPaymentFailed={({ detail: { error } }) =>
                this.paymentFailed.emit({ error })
              }
            />
          )}

          {this.showCurrentPaymentMethod('credit') && (
            <plug-payments-credit
              onCreditPaymentSuccess={({ detail: { data } }) =>
                this.paymentSuccess.emit({ data })
              }
              onCreditPaymentFailed={({ detail: { error } }) =>
                this.paymentFailed.emit({ error })
              }
            />
          )}
        </section>
      </Host>
    )
  }
}
