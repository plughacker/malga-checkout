import { Component, Host, h, Prop, Event } from '@stencil/core'

import { CheckoutModalMode } from './checkout-modal.types'

@Component({
  tag: 'checkout-modal',
  styleUrl: 'checkout-modal.scss',
})
export class CheckoutModal {
  @Prop() open: boolean
  @Prop() mode: CheckoutModalMode
  @Prop() errorTitle?: string
  @Prop() errorDescription?: string
  @Prop() paymentCode: string
  @Prop() paymentImageUrl: string
  @Prop() amount: number
  @Prop() expirationDate?: string
  @Prop() expirationTime?: number

  @Event() successButtonClicked: CustomEvent<void>
  @Event() errorButtonClicked: CustomEvent<void>

  render() {
    if (!this.open) {
      return null
    }

    return (
      <Host class={{ 'checkout-modal__container': true }}>
        {this.mode === 'success' && <checkout-modal-success />}
        {this.mode === 'error' && (
          <checkout-modal-error
            errorTitle={this.errorTitle}
            errorDescription={this.errorDescription}
          />
        )}
        {this.mode === 'pix' && (
          <checkout-modal-pix
            qrCodeIdentificator={this.paymentCode}
            qrCodeImageUrl={this.paymentImageUrl}
            amount={this.amount}
            expirationDate={this.expirationDate}
            expirationTime={this.expirationTime}
          />
        )}
        {this.mode === 'boleto' && (
          <checkout-modal-boleto
            boletoCode={this.paymentCode}
            boletoImageUrl={this.paymentImageUrl}
            amount={this.amount}
            expirationDate={this.expirationDate}
          />
        )}
      </Host>
    )
  }
}
