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

import { t } from '@plug-checkout/i18n'

import payment from '../../stores/payment'
import settings from '../../stores/settings'
import savedCards from '../../stores/saved-cards'

import { PaymentMethods, PaymentMethodsType } from './plug-payments.types'
import { PlugPaymentsError } from '../../types/plug-payments-error.types'

@Component({
  tag: 'plug-payments',
  styleUrl: 'plug-payments.scss',
})
export class PlugPayments implements ComponentInterface {
  @Prop() paymentMethods: PaymentMethods = ['credit', 'pix', 'boleto']

  @Event() paymentFail!: EventEmitter<{
    error: PlugPaymentsError
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
                label={t('paymentMethods.boleto.title', settings.locale)}
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
                label={t('paymentMethods.pix.title', settings.locale)}
                value="pix"
                endIcon="pix"
                isChecked={payment.selectedPaymentMethod === 'pix'}
                onClicked={() => this.handlePaymentChange('pix')}
              />
              {payment.selectedPaymentMethod === 'pix' && (
                <plug-payments-pix
                  onPixPaymentFailed={({ detail: { error } }) =>
                    this.paymentFail.emit({ error })
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
