import {
  Component,
  Host,
  h,
  ComponentInterface,
  Prop,
  Event,
  EventEmitter,
  Fragment,
} from '@stencil/core'

import { t } from '@malga-checkout/i18n'

import payment from '../../stores/payment'
import settings from '../../stores/settings'
import savedCards from '../../stores/saved-cards'

import { PaymentMethods, PaymentMethodsType } from './malga-payments.types'
import { MalgaPaymentsError } from '../../types/malga-payments-error.types'

@Component({
  tag: 'malga-payments',
  styleUrl: 'malga-payments.scss',
})
export class MalgaPayments implements ComponentInterface {
  @Prop() paymentMethods: PaymentMethods = ['credit', 'pix', 'boleto']

  @Event() paymentFail!: EventEmitter<{
    error: MalgaPaymentsError
  }>

  private handlePaymentChange = (value: string) => {
    payment.selectedPaymentMethod = value
  }

  private showCurrentPaymentMethod = (paymentMethod: PaymentMethodsType) => {
    const showPaymentMethod = this.paymentMethods.includes(paymentMethod)

    return showPaymentMethod
  }

  private renderCreditCardLabel() {
    if (savedCards.hasCards) {
      return t('paymentMethods.card.newCardTitle', settings.locale)
    }

    return t('paymentMethods.card.title', settings.locale)
  }

  render() {
    return (
      <Host class={{ 'malga-payments__container': true }}>
        <section class={{ 'malga-payments__content': true }}>
          {this.showCurrentPaymentMethod('credit') && (
            <Fragment>
              {settings.transactionConfig.customerId && (
                <malga-payments-credit-saved-cards />
              )}

              <checkout-radio-field
                fullWidth
                label={this.renderCreditCardLabel()}
                value="credit"
                isChecked={payment.selectedPaymentMethod === 'credit'}
                onClicked={() => this.handlePaymentChange('credit')}
              />
              {payment.selectedPaymentMethod === 'credit' && (
                <malga-payments-credit />
              )}
            </Fragment>
          )}

          {this.showCurrentPaymentMethod('boleto') && (
            <Fragment>
              <checkout-radio-field
                fullWidth
                label={t('paymentMethods.boleto.title', settings.locale)}
                value="boleto"
                isChecked={payment.selectedPaymentMethod === 'boleto'}
                onClicked={() => this.handlePaymentChange('boleto')}
              />
              {payment.selectedPaymentMethod === 'boleto' && (
                <malga-payments-boleto />
              )}
            </Fragment>
          )}

          {this.showCurrentPaymentMethod('pix') && (
            <Fragment>
              <checkout-radio-field
                fullWidth
                label={t('paymentMethods.pix.title', settings.locale)}
                value="pix"
                endIcon="pix"
                isChecked={payment.selectedPaymentMethod === 'pix'}
                onClicked={() => this.handlePaymentChange('pix')}
              />
              {payment.selectedPaymentMethod === 'pix' && (
                <malga-payments-pix
                  onPixPaymentFailed={({ detail: { error } }) =>
                    this.paymentFail.emit({ error })
                  }
                />
              )}
            </Fragment>
          )}

          {this.showCurrentPaymentMethod('nupay') && (
            <Fragment>
              <checkout-radio-field
                fullWidth
                label={t('paymentMethods.nupay.title', settings.locale)}
                value="nupay"
                endIcon="nubank"
                isChecked={payment.selectedPaymentMethod === 'nupay'}
                onClicked={() => this.handlePaymentChange('nupay')}
              />
              {payment.selectedPaymentMethod === 'nupay' && (
                <malga-payments-nupay />
              )}
            </Fragment>
          )}
        </section>
      </Host>
    )
  }
}
