import {
  Component,
  Host,
  h,
  Prop,
  State,
  Fragment,
  Event,
  EventEmitter,
} from '@stencil/core'

import { formatCurrency } from '@malga-checkout/utils'
import { Locale } from '@malga-checkout/i18n/dist/utils'
import { t } from '@malga-checkout/i18n'

@Component({
  tag: 'checkout-modal-pix',
  styleUrl: 'checkout-modal-pix.scss',
})
export class CheckoutModalPix {
  @Prop() locale?: Locale
  @Prop() qrCodeIdentificator: string
  @Prop() qrCodeImageUrl: string
  @Prop() amount: number
  @Prop() currency: string
  @Prop() expirationTime: number
  @Prop() actionButtonLabel?: string
  @Prop() countdownFilledProgressBarColor?: string
  @Prop() countdownEmptyProgressBarColor?: string
  @Prop() hasSuccessRedirectUrl?: boolean
  @Prop() isSession?: boolean
  @Prop() importantMessages?: string[]
  @Prop() waitingPaymentMessage?: string

  @State() clipboardIsClicked = false

  @Event() countdownIsFinished: EventEmitter<void>
  @Event() pixActionButtonIsClicked: EventEmitter<void>

  private handleClickClipboard = () => {
    if (!this.clipboardIsClicked) {
      this.clipboardIsClicked = true
    }
  }

  private handleClipboardButtonLabel = (isMobile: boolean) => {
    if (this.clipboardIsClicked) {
      return t('dialogs.common.clipboardClicked', this.locale)
    }
    if (isMobile) {
      return t('dialogs.common.clipboard', this.locale)
    }
    return t('dialogs.common.clipboardDescription', this.locale)
  }

  private renderListImportantMessages = () => {
    if (this.isSession) {
      return <li>{t('dialogs.pix.importantMessageDefault', this.locale)}</li>
    }

    const defaultImportantMessages = [
      t('dialogs.pix.importantMessageFirst', this.locale),
      t('dialogs.pix.importantMessageSecond', this.locale),
    ]

    const currentImportantMessages =
      this.importantMessages || defaultImportantMessages
    const mappedImportantMessage = currentImportantMessages.map(
      (importantMessage) => <li>{importantMessage}</li>,
    )

    return mappedImportantMessage
  }

  render() {
    return (
      <Host class={{ 'checkout-modal-pix__container': true }}>
        <header class={{ 'checkout-modal-pix__header': true }}>
          <checkout-icon icon="checkLarge" />
          <checkout-typography
            tag="h3"
            variation="header5"
            color="white"
            content={
              this.waitingPaymentMessage ||
              t('dialogs.pix.waitingPaymentMessage', this.locale)
            }
          />
        </header>
        <section class={{ 'checkout-modal-pix__content': true }}>
          <span
            class={{ 'checkout-modal-pix__content--header-detail': true }}
          />
          <checkout-typography
            tag="h4"
            variation="header6"
            content={t('dialogs.pix.title', this.locale)}
          />
          <checkout-typography
            tag="h5"
            variation="field"
            content={t('dialogs.pix.subtitle', this.locale)}
          />
          <div class={{ 'checkout-modal-pix__qr-code-informations': true }}>
            <img src={this.qrCodeImageUrl} alt="QR Code" />
            <div
              class={{
                'checkout-modal-pix__qr-code-informations-clipboard': true,
              }}
            >
              <checkout-typography
                tag="p"
                variation="field"
                color="darkness"
                content={this.qrCodeIdentificator}
              />
              <checkout-clipboard-button
                label={this.handleClipboardButtonLabel(false)}
                clipboardContent={this.qrCodeIdentificator}
                onClick={() => this.handleClickClipboard()}
              />
            </div>
          </div>
          <div class={{ 'checkout-modal-pix__clipboard-button-mobile': true }}>
            <checkout-button
              label={this.handleClipboardButtonLabel(true)}
              clipboardContent={this.qrCodeIdentificator}
              onClicked={() => this.handleClickClipboard()}
            />
          </div>
          <div
            class={{
              'checkout-modal-pix__payment-informations': true,
              'checkout-modal-pix__payment-informations--countdown':
                !!this.expirationTime,
            }}
          >
            {this.expirationTime && (
              <Fragment>
                <div>
                  <p>
                    {t('dialogs.pix.expirationTimeCode', this.locale)}
                    <strong>
                      {' '}
                      {t('dialogs.pix.expirationTime', this.locale)}
                    </strong>
                  </p>
                  <checkout-countdown
                    filledProgressBarColor={
                      this.countdownFilledProgressBarColor
                    }
                    emptyProgressBarColor={this.countdownEmptyProgressBarColor}
                    expirationTime={this.expirationTime}
                    onCountdownFinished={() => this.countdownIsFinished.emit()}
                  />
                </div>

                <p>
                  <strong>{t('dialogs.pix.amount', this.locale)} </strong>
                  {formatCurrency(this.amount, this.currency)}
                </p>
              </Fragment>
            )}
          </div>
          <div
            class={{
              'checkout-modal-pix__informations': true,
            }}
          >
            <checkout-typography
              tag="h5"
              color="darkness"
              variation="field"
              content={t('dialogs.pix.paymentInstructions', this.locale)}
            />

            <ol>
              <li>
                {t('dialogs.pix.paymentInstructionsFirstMessage', this.locale)}
              </li>
              <li>
                {t('dialogs.pix.paymentInstructionsSecondMessage', this.locale)}
              </li>
              <li>
                {t('dialogs.pix.paymentInstructionsThirdMessage', this.locale)}
              </li>
            </ol>
          </div>
          <div
            class={{
              'checkout-modal-pix__informations': true,
            }}
          >
            <checkout-typography
              tag="h5"
              color="darkness"
              variation="field"
              content={t('dialogs.pix.importantMessage', this.locale)}
            />

            <ul>{this.renderListImportantMessages()}</ul>
          </div>
          {!!this.hasSuccessRedirectUrl && (
            <div
              class={{
                'checkout-modal-pix__action-button': true,
              }}
            >
              <checkout-button
                label={
                  this.actionButtonLabel ||
                  t('dialogs.common.actionButtonLabel', this.locale)
                }
                onClicked={() => this.pixActionButtonIsClicked.emit()}
              />
            </div>
          )}
        </section>
      </Host>
    )
  }
}
