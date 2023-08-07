import { t } from '@malga-checkout/i18n'
import { Component, Host, h, ComponentInterface } from '@stencil/core'

import settings from '../../../../stores/settings'

@Component({
  tag: 'malga-payments-nupay-content',
  styleUrl: 'malga-payments-nupay-content.scss',
})
export class MalgaPaymentsNuPayContent implements ComponentInterface {
  render() {
    return (
      <Host class={{ 'malga-payments-nupay-content__container': true }}>
        <h4>{t('paymentMethods.nupay.content.title', settings.locale)}</h4>
        <h5>{t('paymentMethods.nupay.content.subtitle', settings.locale)}</h5>
        <p>{t('paymentMethods.nupay.content.description', settings.locale)}</p>
        <ul>
          <li>• {t('paymentMethods.nupay.stepper.first', settings.locale)}</li>
          <li>• {t('paymentMethods.nupay.stepper.second', settings.locale)}</li>
          <li>• {t('paymentMethods.nupay.stepper.third', settings.locale)}</li>
          <li>• {t('paymentMethods.nupay.stepper.fourth', settings.locale)}</li>
        </ul>
        <small>
          {t('paymentMethods.nupay.details.first', settings.locale)}{' '}
          <strong>
            {t('paymentMethods.nupay.details.second', settings.locale)}
          </strong>{' '}
          {t('paymentMethods.nupay.details.third', settings.locale)}
        </small>
      </Host>
    )
  }
}
