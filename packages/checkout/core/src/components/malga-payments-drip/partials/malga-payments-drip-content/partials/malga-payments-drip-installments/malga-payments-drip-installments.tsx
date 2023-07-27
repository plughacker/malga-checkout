import { t } from '@malga-checkout/i18n'
import {
  Component,
  Host,
  h,
  ComponentInterface,
  Fragment,
  Prop,
} from '@stencil/core'

import settings from '../../../../../../stores/settings'

@Component({
  tag: 'malga-payments-drip-installments',
  styleUrl: 'malga-payments-drip-installments.scss',
})
export class MalgaPaymentsDripInstallments implements ComponentInterface {
  @Prop() installments: { dueDate: string; amount: string }[]
  @Prop() cashback: string

  private renderInstallments = () => {
    const mappedInstallments = this.installments.map((installment, index) => (
      <Fragment>
        <div class={{ 'malga-payments-drip-installments__item': true }}>
          <span
            class={{ 'malga-payments-drip-installments__item-dot': true }}
          />
          <div
            class={{
              'malga-payments-drip-installments__item-description': true,
            }}
          >
            <checkout-typography
              color="darkness"
              variation="subtitle1"
              content={`${index + 1}${t(
                'paymentMethods.drip.installments.thirtyDays',
                settings.locale,
              )}`}
            />
            <checkout-typography
              tag="span"
              variation="body1"
              content={installment.amount}
            />
          </div>
        </div>
        <span
          class={{ 'malga-payments-drip-installments__item-divider': true }}
        />
      </Fragment>
    ))

    return mappedInstallments
  }

  private renderCashback = () => {
    return (
      <div class={{ 'malga-payments-drip-installments__item': true }}>
        <span
          class={{
            'malga-payments-drip-installments__item-dot': true,
            'malga-payments-drip-installments__item-dot--colored': true,
          }}
        />
        <div
          class={{
            'malga-payments-drip-installments__item-description': true,
          }}
        >
          <p
            class={{
              'malga-payments-drip-installments__item-description-cashback':
                true,
            }}
          >
            <strong>Cashback</strong> +{this.cashback}
          </p>
        </div>
      </div>
    )
  }

  render() {
    return (
      <Host class={{ 'malga-payments-drip-installments__container': true }}>
        {this.renderInstallments()}
        {this.renderCashback()}
      </Host>
    )
  }
}
