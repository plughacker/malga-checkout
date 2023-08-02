import { Component, Host, h, ComponentInterface } from '@stencil/core'

import payment from '../../../../stores/payment'

@Component({
  tag: 'malga-payments-nupay-iframe',
  styleUrl: 'malga-payments-nupay-iframe.scss',
})
export class MalgaPaymentsNuPayIframe implements ComponentInterface {
  private handleCloseIframe = () => {
    payment.paymentUrl = ''
  }

  render() {
    return (
      <Host class={{ 'malga-payments-nupay-iframe__container': true }}>
        <div class={{ 'malga-payments-nupay-iframe__modal': true }}>
          <button onClick={this.handleCloseIframe}>
            <checkout-icon icon="close" />
          </button>
          <iframe src={payment.paymentUrl} title="Nubank" frameBorder={0} />
        </div>
      </Host>
    )
  }
}
