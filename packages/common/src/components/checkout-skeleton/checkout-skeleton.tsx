import { Component, Host, h, ComponentInterface, Prop } from '@stencil/core'

@Component({
  tag: 'checkout-skeleton',
  styleUrl: 'checkout-skeleton.scss',
})
export class CheckoutSelectField implements ComponentInterface {
  @Prop() class?: string
  @Prop() width?: string

  render() {
    return (
      <Host
        class={{
          'checkout-skeleton__container': true,
          [this.class]: !!this.class,
        }}
        style={{ width: this.width ?? '100%' }}
      ></Host>
    )
  }
}
