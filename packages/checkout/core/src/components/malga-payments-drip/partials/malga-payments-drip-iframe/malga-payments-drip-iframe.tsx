import { Component, Host, h, ComponentInterface, State } from '@stencil/core'

import payment from '../../../../stores/payment'

@Component({
  tag: 'malga-payments-drip-iframe',
  styleUrl: 'malga-payments-drip-iframe.scss',
})
export class MalgaPaymentsDripIframe implements ComponentInterface {
  private iframe: HTMLIFrameElement = null

  @State() loadCount = 0

  componentDidLoad() {
    if (this.iframe) {
      this.iframe.addEventListener('load', () => {
        this.loadCount = this.loadCount + 1
      })
    }
  }

  componentDidUpdate() {
    // when the iframe redirects the user to another page, we will close the modal.
    if (this.loadCount === 2) {
      this.iframe.removeEventListener('load', () => null)
      this.loadCount = 0
      payment.paymentUrl = ''
    }
  }

  render() {
    return (
      <Host class={{ 'malga-payments-drip-iframe__container': true }}>
        <div class={{ 'malga-payments-drip-iframe__modal': true }}>
          <iframe
            ref={(element) => (this.iframe = element)}
            src={payment.paymentUrl}
            title="Drip"
            frameBorder={0}
          />
        </div>
      </Host>
    )
  }
}
