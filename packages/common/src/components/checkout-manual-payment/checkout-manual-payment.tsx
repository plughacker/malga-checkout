import { t } from '@plug-checkout/i18n'
import { Locale } from '@plug-checkout/i18n/dist/utils'
import { Component, Host, h, ComponentInterface, Prop } from '@stencil/core'

import { CheckoutManualPaymentDescriptions } from './checkout-manual-payment.types'

@Component({
  tag: 'checkout-manual-payment',
  styleUrl: 'checkout-manual-payment.scss',
})
export class CheckoutManualPayment implements ComponentInterface {
  @Prop() fullWidth: boolean
  @Prop() paymentMethod: CheckoutManualPaymentDescriptions = 'pix'
  @Prop() locale?: Locale

  render() {
    const descriptions = {
      pix: (
        <span slot="content" class="checkout-manual-payment__description">
          {t('paymentMethods.pix.descriptions.showQrCode', this.locale)}{' '}
          <strong>
            {t(
              'paymentMethods.pix.descriptions.paymentConfirmation',
              this.locale,
            )}
          </strong>
          .
        </span>
      ),
      boleto: (
        <span slot="content" class="checkout-manual-payment__description">
          {t('paymentMethods.boleto.descriptions.showBarcode', this.locale)}{' '}
          <strong>
            {t(
              'paymentMethods.boleto.descriptions.paymentConfirmation',
              this.locale,
            )}
          </strong>
          .
        </span>
      ),
    }

    return (
      <Host
        class={{
          'checkout-manual-payment__container': true,
          'checkout-manual-payment__container--full-width': !!this.fullWidth,
        }}
      >
        <checkout-typography tag="p">
          {descriptions[this.paymentMethod]}
        </checkout-typography>
      </Host>
    )
  }
}
