import { Component, Host, h } from '@stencil/core'

@Component({
  tag: 'plug-checkout-full-header',
  styleUrl: 'plug-checkout-full-header.scss',
})
export class PlugCheckoutFullHeader {
  render() {
    return (
      <Host class={{ 'plug-checkout-full-header__container': true }}>
        <header class={{ 'plug-checkout-full-header__content': true }}>
          <p>Hello World</p>
          <p>Test</p>
        </header>
      </Host>
    )
  }
}
