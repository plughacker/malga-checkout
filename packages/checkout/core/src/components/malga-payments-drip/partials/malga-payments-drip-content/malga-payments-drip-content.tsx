import { t } from '@malga-checkout/i18n'
import { Component, Host, h, ComponentInterface, State } from '@stencil/core'

import settings from '../../../../stores/settings'

import { MalgaPaymentsDripContentService } from './malga-payments-drip-content.service'

import { MalgaPaymentsDripContentInstallment } from './malga-payments-drip-content.types'

import DripPayIcon from './assets/drip-pay.svg'

@Component({
  tag: 'malga-payments-drip-content',
  styleUrl: 'malga-payments-drip-content.scss',
})
export class MalgaPaymentsDripContent implements ComponentInterface {
  @State() installments: MalgaPaymentsDripContentInstallment[] = []
  @State() cashback = ''

  private fetchInstallments = async () => {
    const dripContentService = new MalgaPaymentsDripContentService({
      amount: settings.transactionConfig.amount,
      sandbox: settings.sandbox,
      debug: settings.debug,
      clientId: settings.clientId,
    })
    const { cashback, installments } = await dripContentService.getContent()

    this.cashback = cashback
    this.installments = installments
  }

  componentWillLoad() {
    this.fetchInstallments()
  }

  render() {
    return (
      <Host class={{ 'malga-payments-drip-content__container': true }}>
        <i innerHTML={DripPayIcon} />
        <p>
          {t('paymentMethods.drip.descriptions.first', settings.locale)}{' '}
          <strong>
            {t('paymentMethods.drip.descriptions.second', settings.locale)}
          </strong>{' '}
          {t('paymentMethods.drip.descriptions.third', settings.locale)}
        </p>
        <malga-payments-drip-installments
          cashback={this.cashback}
          installments={this.installments}
        />
      </Host>
    )
  }
}
