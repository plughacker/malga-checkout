import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core'

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
  @Prop() actionButtonLabel?: string
  @Prop() successActionButtonLabel?: string
  @Prop() errorActionButtonLabel?: string
  @Prop() successDescription?: string

  @Event() successButtonClicked: EventEmitter<void>
  @Event() errorButtonClicked: EventEmitter<void>
  @Event() pixCountdownIsFinished: EventEmitter<void>

  render() {
    if (!this.open) {
      return null
    }

    return (
      <Host class={{ 'checkout-modal__container': true }}>
        <div class={{ 'checkout-modal__content': true }}>
          {this.mode === 'success' && (
            <checkout-modal-success
              successDescription={this.successDescription}
              successActionButtonLabel={this.successActionButtonLabel}
              onSuccessActionButtonClicked={() =>
                this.successButtonClicked.emit()
              }
            />
          )}
          {this.mode === 'error' && (
            <checkout-modal-error
              errorTitle={this.errorTitle}
              errorDescription={this.errorDescription}
              errorActionButtonLabel={this.errorActionButtonLabel}
              onErrorActionButtonClicked={() => this.errorButtonClicked.emit()}
            />
          )}
          {this.mode === 'pix' && (
            <checkout-modal-pix
              qrCodeIdentificator={this.paymentCode}
              qrCodeImageUrl={this.paymentImageUrl}
              amount={this.amount}
              expirationDate={this.expirationDate}
              expirationTime={this.expirationTime}
              actionButtonLabel={this.actionButtonLabel}
              onCountdownIsFinished={() => this.pixCountdownIsFinished.emit()}
              onPixActionButtonIsClicked={() =>
                this.successButtonClicked.emit()
              }
            />
          )}
          {this.mode === 'boleto' && (
            <checkout-modal-boleto
              boletoCode={this.paymentCode}
              boletoImageUrl={this.paymentImageUrl}
              amount={this.amount}
              expirationDate={this.expirationDate}
              actionButtonLabel={this.actionButtonLabel}
              onBoletoActionButtonIsClicked={() =>
                this.successButtonClicked.emit()
              }
            />
          )}
        </div>
      </Host>
    )
  }
}
