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

import { Customer } from '../../providers/base-provider'
import { BoletoAttributes } from '../../providers/boleto'
import { PixAttributes } from '../../providers/pix'

import { PlugPaymentsCreditInstallmentsConfig } from '../plug-payments-credit/plug-payments-credit.types'

import { PlugCheckoutDialog } from '../plug-checkout/plug-checkout.types'

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
  @Prop() paymentMethods: PaymentMethods = ['credit', 'pix', 'boleto']
  @Prop() showCreditCard = false
  @Prop() clientId: string
  @Prop() publicKey: string
  @Prop() merchantId: string
  @Prop() statementDescriptor: string
  @Prop() amount: number
  @Prop() pix?: PixAttributes
  @Prop() boleto?: BoletoAttributes
  @Prop() installments?: PlugPaymentsCreditInstallmentsConfig
  @Prop() customer?: Customer
  @Prop() description?: string
  @Prop() orderId?: string
  @Prop() customerId?: string
  @Prop() currency = 'BRL'
  @Prop() sandbox = false
  @Prop() capture = false
  @Prop() dialogConfig: PlugCheckoutDialog

  @Event() checkoutPaymentSuccess!: EventEmitter<{
    data: PlugPaymentsChargeSuccess
  }>
  @Event() checkoutPaymentFailed!: EventEmitter<{
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
                  dialogConfig={this.dialogConfig}
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
                  onBoletoPaymentSuccess={({ detail: { data } }) =>
                    this.checkoutPaymentSuccess.emit({ data })
                  }
                  onBoletoPaymentFailed={({ detail: { error } }) =>
                    this.checkoutPaymentFailed.emit({ error })
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
                endIcon="pix"
                isChecked={this.currentPayment === 'pix'}
                onClicked={() => this.handlePaymentChange('pix')}
              />
              {this.currentPayment === 'pix' && (
                <plug-payments-pix
                  dialogConfig={this.dialogConfig}
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
                  onPixPaymentSuccess={({ detail: { data } }) =>
                    this.checkoutPaymentSuccess.emit({ data })
                  }
                  onPixPaymentFailed={({ detail: { error } }) =>
                    this.checkoutPaymentFailed.emit({ error })
                  }
                />
              )}
            </Fragment>
          )}

          {this.showCurrentPaymentMethod('credit') && (
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
                  dialogConfig={this.dialogConfig}
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
                  onCreditPaymentSuccess={({ detail: { data } }) =>
                    this.checkoutPaymentSuccess.emit({ data })
                  }
                  onCreditPaymentFailed={({ detail: { error } }) =>
                    this.checkoutPaymentFailed.emit({ error })
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
