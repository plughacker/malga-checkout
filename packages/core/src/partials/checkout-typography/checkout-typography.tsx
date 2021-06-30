import { Component, Host, h } from '@stencil/core'

@Component({
  tag: 'checkout-typography',
  styleUrl: 'checkout-typography.scss',
})
export class CheckoutTypography {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    )
  }
}
