import { Component, Host, h, Prop } from '@stencil/core'

@Component({
  tag: 'checkout-error-message',
  styleUrl: 'checkout-error-message.scss',
})
export class CheckoutErrorMessage {
  @Prop() message: string
  @Prop() customClass?: string

  render() {
    return (
      <Host
        class={{
          'checkout-error-message': true,
          [this.customClass]: !!this.customClass,
        }}
      >
        <checkout-typography
          color="warning"
          variation="subtitle2"
          content={this.message}
        />
      </Host>
    )
  }
}
