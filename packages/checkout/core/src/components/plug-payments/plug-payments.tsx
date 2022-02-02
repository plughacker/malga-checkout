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
        </section>
      </Host>
    )
  }
}
