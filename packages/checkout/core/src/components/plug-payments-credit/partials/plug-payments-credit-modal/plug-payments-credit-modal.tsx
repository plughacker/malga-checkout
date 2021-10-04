import { Component, Host, h } from '@stencil/core'

@Component({
  tag: 'plug-payments-credit-modal',
  styleUrl: 'plug-payments-credit-modal.scss',
})
export class PlugPaymentsCreditModal {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    )
  }
}
