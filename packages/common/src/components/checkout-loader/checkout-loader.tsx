import { Component, ComponentInterface, h, Host } from '@stencil/core'

@Component({ tag: 'checkout-loader', styleUrl: 'checkout-loader.scss' })
export class CheckoutIcon implements ComponentInterface {
  render() {
    return (
      <Host class={{ 'checkout-loader__container': true }}>
        <checkout-icon icon={'spinner'} class={'icon icon-loading'} />
      </Host>
    )
  }
}
