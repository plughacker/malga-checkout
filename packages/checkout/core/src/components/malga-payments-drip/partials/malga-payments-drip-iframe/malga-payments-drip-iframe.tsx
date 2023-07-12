import { Component, Host, h, ComponentInterface } from '@stencil/core'

import payment from '../../../../stores/payment'

@Component({
  tag: 'malga-payments-drip-iframe',
  styleUrl: 'malga-payments-drip-iframe.scss',
})
export class MalgaPaymentsDripIframe implements ComponentInterface {
  render() {
    return (
      <Host class={{ 'malga-payments-drip-iframe__container': true }}>
        <div class={{ 'malga-payments-drip-iframe__modal': true }}>
          <iframe src={payment.paymentUrl} title="Drip" frameBorder={0} />
        </div>
      </Host>
    )
  }
}
