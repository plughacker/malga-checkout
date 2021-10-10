import {
  Component,
  Host,
  h,
  ComponentInterface,
  State,
  Prop,
  Event,
  EventEmitter,
  Fragment,
} from '@stencil/core'

import { ICustomer } from '../../providers/base-provider'
import { IBoleto } from '../../providers/Boleto'
import { IPix } from '../../providers/Pix'

import { PlugPaymentsCreditInstallmentsConfig } from '../plug-payments-credit/plug-payments-credit.types'

import {
  PaymentMethods,
  PaymentMethodsType,
  PlugPaymentsChargeSuccess,
  PlugPaymentsChargeError,
} from './plug-payments.types'

@Component({
  tag: 'plug-payments',
  styleUrl: 'plug-payments.scss',
})
export class PlugPayments implements ComponentInterface {
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

  @State() currentPayment: string

  private handlePaymentChange = (value: string) => {
    this.currentPayment = value
  }

  private showCurrentPaymentMethod = (paymentMethod: PaymentMethodsType) => {
    const showPaymentMethod = this.paymentMethods.includes(paymentMethod)

    return showPaymentMethod
  }

  render() {
    return (
      <Host class={{ 'plug-payments__container': true }}>
        <section class={{ 'plug-payments__content': true }}>
          {this.showCurrentPaymentMethod('boleto') && (
            <Fragment>
              <checkout-radio-field
                fullWidth
                label="Boleto"
                value="boleto"
                isChecked={this.currentPayment === 'boleto'}
                onClicked={() => this.handlePaymentChange('boleto')}
              />
              {this.currentPayment === 'boleto' && (
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
            </Fragment>
          )}

          {this.showCurrentPaymentMethod('pix') && (
            <Fragment>
              <checkout-radio-field
                fullWidth
                label="PIX"
                value="pix"
                isChecked={this.currentPayment === 'pix'}
                onClicked={() => this.handlePaymentChange('pix')}
              />
              {this.currentPayment === 'pix' && (
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
            </Fragment>
          )}

          {this.showCurrentPaymentMethod('card') && (
            <Fragment>
              <checkout-radio-field
                fullWidth
                label="Cartão de crédito"
                value="credit"
                isChecked={this.currentPayment === 'credit'}
                onClicked={() => this.handlePaymentChange('credit')}
              />
              {this.currentPayment === 'credit' && (
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
            </Fragment>
          )}
        </section>
      </Host>
    )
  }
}
