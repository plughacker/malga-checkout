import { Component, Host, h, Event, EventEmitter, Prop } from '@stencil/core'

@Component({
  tag: 'checkout-modal-success',
  styleUrl: 'checkout-modal-success.scss',
})
export class CheckoutModalSuccess {
  @Prop() successDescription = 'Pedido recebido com sucesso!'
  @Prop() successActionButtonLabel = 'Continuar'

  @Event() successActionButtonClicked: EventEmitter<void>

  render() {
    return (
      <Host class={{ 'checkout-modal-success__container': true }}>
        <checkout-icon icon="checkLarge" />
        <checkout-typography
          tag="h3"
          variation="header5"
          color="white"
          content={this.successDescription}
        />
        <checkout-button
          label={this.successActionButtonLabel}
          onClicked={() => this.successActionButtonClicked.emit()}
        />
      </Host>
    )
  }
}
