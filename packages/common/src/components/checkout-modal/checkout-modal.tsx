import { Component, Host, h, Prop } from '@stencil/core'

import { CheckoutModalMode } from './checkout-modal.types'

@Component({
  tag: 'checkout-modal',
  styleUrl: 'checkout-modal.scss',
})
export class CheckoutModal {
  @Prop() open: boolean
  @Prop() mode: CheckoutModalMode

  render() {
    if (!this.open) {
      return null
    }

    return (
      <Host class={{ 'checkout-modal__container': true }}>
        {this.mode === 'success' && <checkout-modal-success />}
        {this.mode === 'error' && <checkout-modal-error />}
        {this.mode === 'pix' && <checkout-modal-pix />}
      </Host>
    )
  }
}
