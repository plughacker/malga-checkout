import { Component, Host, h, Prop } from '@stencil/core'

import Clipboard from 'clipboard'

@Component({
  tag: 'checkout-clipboard-button',
  styleUrl: 'checkout-clipboard-button.scss',
})
export class CheckoutClipboardButton {
  @Prop() label: string
  @Prop() clipboardContent: string

  componentDidLoad() {
    new Clipboard('#clipboard')
  }

  render() {
    return (
      <Host class={{ 'checkout-clipboard-button__container': true }}>
        <button
          id="clipboard"
          class={{ 'checkout-clipboard-button__button': true }}
          data-clipboard-text={this.clipboardContent}
        >
          <checkout-icon icon="clipboard" />
          <checkout-typography
            tag="span"
            variation="label"
            content={this.label}
          />
        </button>
      </Host>
    )
  }
}
