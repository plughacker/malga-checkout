import { Component, Host, h, Prop } from '@stencil/core'

@Component({
  tag: 'checkout-error-message',
  styleUrl: 'checkout-error-message.scss',
})
export class CheckoutErrorMessage {
  @Prop() message: string
  @Prop() customClass?: string
  @Prop() fullWidth = false

  render() {
    return (
      <Host
        class={{
          'checkout-error-message': true,
          'checkout-error-message--full-width': this.fullWidth,
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
