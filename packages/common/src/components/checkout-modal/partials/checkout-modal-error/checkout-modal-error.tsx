import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core'

@Component({
  tag: 'checkout-modal-error',
  styleUrl: 'checkout-modal-error.scss',
})
export class CheckoutModalError {
  @Prop() errorTitle?: string
  @Prop() errorDescription?: string

  @Event() errorButtonClicked: EventEmitter<void>

  render() {
    return (
      <Host class={{ 'checkout-modal-error__container ': true }}>
        <checkout-icon icon="error" />
        <checkout-typography
          tag="h3"
          variation="header5"
          color="white"
          content="Transação não aprovada"
        />

        {this.errorTitle && (
          <checkout-typography
            tag="h4"
            variation="field"
            color="white"
            content={this.errorTitle}
          />
        )}

        <checkout-typography
          variation="field"
          color="white"
          content={this.errorDescription}
        />
        <checkout-button
          label="Tentar Novamente"
          onClick={() => this.errorButtonClicked.emit()}
        />
      </Host>
    )
  }
}
