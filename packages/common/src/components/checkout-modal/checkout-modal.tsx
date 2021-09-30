import { Component, Host, h, Prop } from '@stencil/core'

@Component({
  tag: 'checkout-modal',
  styleUrl: 'checkout-modal.scss',
})
export class CheckoutModal {
  @Prop() open: boolean

  render() {
    if (!this.open) {
      return null
    }

    return (
      <Host class={{ 'checkout-modal__container': true }}>
        <div class={{ 'checkout-modal__content': true }}>
          <slot></slot>
        </div>
      </Host>
    )
  }
}
