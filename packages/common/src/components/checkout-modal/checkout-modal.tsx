import { Locale } from '@malga-checkout/i18n/dist/utils'
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
  @Prop() errorSubtitle?: string
  @Prop() errorDescription?: string
  @Prop() paymentCode: string
  @Prop() paymentImageUrl: string
  @Prop() amount: number
  @Prop() currency: string
  @Prop() expirationDate?: string
  @Prop() expirationTime?: number
  @Prop() actionButtonLabel?: string
  @Prop() successActionButtonLabel?: string
  @Prop() errorActionButtonLabel?: string
  @Prop() successDescription?: string
  @Prop() boletoWaitingPaymentMessage?: string
  @Prop() pixImportantMessages?: string[]
  @Prop() pixWaitingPaymentMessage?: string
  @Prop() pixFilledProgressBarColor?: string
  @Prop() pixEmptyProgressBarColor?: string
  @Prop() hasSuccessRedirectUrl?: boolean
  @Prop() isSession?: boolean
  @Prop() locale?: Locale

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
              locale={this.locale}
              hasSuccessRedirectUrl={this.hasSuccessRedirectUrl}
              successDescription={this.successDescription}
              successActionButtonLabel={this.successActionButtonLabel}
              onSuccessActionButtonClicked={() =>
                this.successButtonClicked.emit()
              }
            />
          )}
          {this.mode === 'error' && (
            <checkout-modal-error
              locale={this.locale}
              errorTitle={this.errorTitle}
              errorSubtitle={this.errorSubtitle}
              errorDescription={this.errorDescription}
              errorActionButtonLabel={this.errorActionButtonLabel}
              onErrorActionButtonClicked={() => this.errorButtonClicked.emit()}
            />
          )}
          {this.mode === 'pix' && (
            <checkout-modal-pix
              locale={this.locale}
              hasSuccessRedirectUrl={this.hasSuccessRedirectUrl}
              isSession={this.isSession}
              currency={this.currency}
              qrCodeIdentificator={this.paymentCode}
              qrCodeImageUrl={this.paymentImageUrl}
              amount={this.amount}
              expirationTime={this.expirationTime}
              actionButtonLabel={this.actionButtonLabel}
              countdownFilledProgressBarColor={this.pixFilledProgressBarColor}
              countdownEmptyProgressBarColor={this.pixEmptyProgressBarColor}
              importantMessages={this.pixImportantMessages}
              waitingPaymentMessage={this.pixWaitingPaymentMessage}
              onCountdownIsFinished={() => this.pixCountdownIsFinished.emit()}
              onPixActionButtonIsClicked={() =>
                this.successButtonClicked.emit()
              }
            />
          )}
          {this.mode === 'boleto' && (
            <checkout-modal-boleto
              locale={this.locale}
              hasSuccessRedirectUrl={this.hasSuccessRedirectUrl}
              isSession={this.isSession}
              currency={this.currency}
              boletoCode={this.paymentCode}
              boletoImageUrl={this.paymentImageUrl}
              amount={this.amount}
              expirationDate={this.expirationDate}
              waitingPaymentMessage={this.boletoWaitingPaymentMessage}
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
