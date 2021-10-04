import { Component, Host, h, Event, EventEmitter } from '@stencil/core'

@Component({
  tag: 'checkout-modal-success',
  styleUrl: 'checkout-modal-success.scss',
})
export class CheckoutModalSuccess {
  @Event() successButtonClicked: EventEmitter<void>

  render() {
    return (
      <Host class={{ 'checkout-modal-success__container': true }}>
        <checkout-icon icon="checkLarge" />
        <checkout-typography
          tag="h3"
          variation="header5"
          color="white"
          content="Pedido recebido com sucesso!"
        />
        <checkout-button
          label="Continuar"
          onClick={() => this.successButtonClicked.emit()}
        />
      </Host>
    )
  }
}
