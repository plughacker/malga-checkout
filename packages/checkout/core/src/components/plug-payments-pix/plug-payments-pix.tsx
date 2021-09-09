import { Component, Host, h } from '@stencil/core'

@Component({
  tag: 'plug-payments-pix',
  styleUrl: 'plug-payments-pix.scss',
})
export class PlugPaymentsPix {
  render() {
    return (
      <Host>
        <checkout-manual-payment fullWidth paymentMethod="pix" />
      </Host>
    )
  }
}
