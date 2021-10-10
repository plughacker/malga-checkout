import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core'
import { ICustomer } from '../../providers/base-provider'
import { IBoleto } from '../../providers/boleto'
import { IPix } from '../../providers/pix'
import { PlugPaymentsCreditInstallmentsConfig } from '../plug-payments-credit/plug-payments-credit.types'
import {
  PaymentMethods,
  PaymentMethodsType,
  PlugPaymentsChargeError,
  PlugPaymentsChargeSuccess,
} from '../plug-payments/plug-payments.types'

@Component({
  tag: 'plug-checkout',
  styleUrl: 'plug-checkout.scss',
})
export class PlugCheckout {
  @Prop() paymentMethods: PaymentMethods = ['card', 'pix', 'boleto']
  @Prop() showCreditCard = false
  @Prop() clientId: string
  @Prop() publicKey: string
  @Prop() merchantId: string
  @Prop() statementDescriptor: string
  @Prop() amount: number
  @Prop() pix?: IPix
  @Prop() boleto?: IBoleto
  @Prop() installments?: PlugPaymentsCreditInstallmentsConfig
  @Prop() customer?: ICustomer
  @Prop() description?: string
  @Prop() orderId?: string
  @Prop() customerId?: string
  @Prop() currency = 'BRL'
  @Prop() sandbox = false
  @Prop() capture = false
  @Prop() showDialog = true

  @Event() paymentSuccess!: EventEmitter<{
    data: PlugPaymentsChargeSuccess
  }>
  @Event() paymentFailed!: EventEmitter<{
    error: PlugPaymentsChargeError
  }>

  private showCurrentPaymentMethod = (paymentMethod: PaymentMethodsType) => {
    const showPaymentMethod = this.paymentMethods.includes(paymentMethod)

    return this.paymentMethods.length === 1 && showPaymentMethod
  }

  render() {
    return (
      <Host class={{ 'plug-checkout__container': true }}>
        <section class={{ 'plug-checkout__content': true }}>
          {this.paymentMethods.length > 1 && (
            <plug-payments
              publicKey={this.publicKey}
              clientId={this.clientId}
              merchantId={this.merchantId}
              customer={this.customer}
              customerId={this.customerId}
              statementDescriptor={this.statementDescriptor}
              amount={this.amount}
              showCreditCard={this.showCreditCard}
              boleto={this.boleto}
              pix={this.pix}
              installments={this.installments}
              sandbox={this.sandbox}
              paymentMethods={this.paymentMethods}
              onPaymentSuccess={({ detail: { data } }) =>
                this.paymentSuccess.emit({ data })
              }
              onPaymentFailed={({ detail: { error } }) =>
                this.paymentFailed.emit({ error })
              }
            />
          )}

          {this.showCurrentPaymentMethod('boleto') && (
            <plug-payments-boleto
              showDialog={this.showDialog}
              clientId={this.clientId}
              publicKey={this.publicKey}
              merchantId={this.merchantId}
              statementDescriptor={this.statementDescriptor}
              amount={this.amount}
              customer={this.customer}
              customerId={this.customerId}
              orderId={this.orderId}
              currency={this.currency}
              description={this.description}
              sandbox={this.sandbox}
              capture={this.capture}
              boleto={this.boleto}
              onPaymentSuccess={({ detail: { data } }) =>
                this.paymentSuccess.emit({ data })
              }
              onPaymentFailed={({ detail: { error } }) =>
                this.paymentFailed.emit({ error })
              }
            />
          )}

          {this.showCurrentPaymentMethod('pix') && (
            <plug-payments-pix
              showDialog={this.showDialog}
              clientId={this.clientId}
              publicKey={this.publicKey}
              merchantId={this.merchantId}
              statementDescriptor={this.statementDescriptor}
              amount={this.amount}
              customer={this.customer}
              customerId={this.customerId}
              orderId={this.orderId}
              currency={this.currency}
              description={this.description}
              sandbox={this.sandbox}
              capture={this.capture}
              pix={this.pix}
              onPaymentSuccess={({ detail: { data } }) =>
                this.paymentSuccess.emit({ data })
              }
              onPaymentFailed={({ detail: { error } }) =>
                this.paymentFailed.emit({ error })
              }
            />
          )}

          {this.showCurrentPaymentMethod('card') && (
            <plug-payments-credit
              showDialog={this.showDialog}
              showCreditCard={this.showCreditCard}
              clientId={this.clientId}
              publicKey={this.publicKey}
              merchantId={this.merchantId}
              statementDescriptor={this.statementDescriptor}
              amount={this.amount}
              customerId={this.customerId}
              customer={this.customer}
              orderId={this.orderId}
              currency={this.currency}
              description={this.description}
              sandbox={this.sandbox}
              capture={this.capture}
              installmentsConfig={this.installments}
              onPaymentSuccess={({ detail: { data } }) =>
                this.paymentSuccess.emit({ data })
              }
              onPaymentFailed={({ detail: { error } }) =>
                this.paymentFailed.emit({ error })
              }
            />
          )}
        </section>
      </Host>
    )
  }
}
