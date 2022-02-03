import {
  Component,
  Host,
  h,
  ComponentInterface,
  Prop,
  Fragment,
} from '@stencil/core'

import payment from '../../stores/payment'
import settings from '../../stores/settings'
import savedCards from '../../stores/saved-cards'

import { PaymentMethods, PaymentMethodsType } from './plug-payments.types'

@Component({
  tag: 'plug-payments',
  styleUrl: 'plug-payments.scss',
})
export class PlugPayments implements ComponentInterface {
  @Prop() paymentMethods: PaymentMethods = ['credit', 'pix', 'boleto']

  private handlePaymentChange = (value: string) => {
    payment.selectedPaymentMethod = value
  }

  private showCurrentPaymentMethod = (paymentMethod: PaymentMethodsType) => {
    const showPaymentMethod = this.paymentMethods.includes(paymentMethod)

    return showPaymentMethod
  }

  private renderCreditCardLabel() {
    if (savedCards.hasCards) {
      return 'Novo cartão de crédito'
    }

    return 'Cartão de crédito'
  }

  render() {
    return (
      <Host class={{ 'plug-payments__container': true }}>
        <section class={{ 'plug-payments__content': true }}>
          {this.showCurrentPaymentMethod('credit') && (
            <Fragment>
              {settings.transactionConfig.customerId && (
                <plug-payments-credit-saved-cards />
              )}

              <checkout-radio-field
                fullWidth
                label={this.renderCreditCardLabel()}
                value="credit"
                isChecked={payment.selectedPaymentMethod === 'credit'}
                onClicked={() => this.handlePaymentChange('credit')}
              />
              {payment.selectedPaymentMethod === 'credit' && (
                <plug-payments-credit />
              )}
            </Fragment>
          )}

          {this.showCurrentPaymentMethod('boleto') && (
            <Fragment>
              <checkout-radio-field
                fullWidth
                label="Boleto"
                value="boleto"
                isChecked={payment.selectedPaymentMethod === 'boleto'}
                onClicked={() => this.handlePaymentChange('boleto')}
              />
              {payment.selectedPaymentMethod === 'boleto' && (
                <plug-payments-boleto />
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
                isChecked={payment.selectedPaymentMethod === 'pix'}
                onClicked={() => this.handlePaymentChange('pix')}
              />
              {payment.selectedPaymentMethod === 'pix' && <plug-payments-pix />}
            </Fragment>
          )}
        </section>
      </Host>
    )
  }
}
