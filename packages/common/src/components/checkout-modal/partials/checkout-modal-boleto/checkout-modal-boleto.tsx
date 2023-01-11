import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core'
import { formatDate, formatCurrency, parseDate } from '@malga-checkout/utils'
import { Locale } from '@malga-checkout/i18n/dist/utils'
import { t } from '@malga-checkout/i18n'

@Component({
  tag: 'checkout-modal-boleto',
  styleUrl: 'checkout-modal-boleto.scss',
})
export class CheckoutModalBoleto {
  @Prop() locale?: Locale
  @Prop() boletoCode: string
  @Prop() boletoImageUrl: string
  @Prop() amount: number
  @Prop() currency: string
  @Prop() expirationDate: string
  @Prop() actionButtonLabel?: string
  @Prop() waitingPaymentMessage?: string
  @Prop() hasSuccessRedirectUrl?: boolean
  @Prop() isSession?: boolean

  @Event() boletoActionButtonIsClicked: EventEmitter<void>

  private getExpirationDateFormatted = () => {
    const [year, month, day] = parseDate(this.expirationDate)
    const currentDate = new Date(year, month, day)
    const formattedDate = formatDate(currentDate)

    return formattedDate
  }

  render() {
    return (
      <Host class={{ 'checkout-modal-boleto__container': true }}>
        <header class={{ 'checkout-modal-boleto__header': true }}>
          <checkout-icon icon="checkLarge" />
          <checkout-typography
            tag="h3"
            variation="header5"
            color="white"
            content={
              this.waitingPaymentMessage ||
              t('dialogs.boleto.waitingPaymentMessage', this.locale)
            }
          />
        </header>
        <section class={{ 'checkout-modal-boleto__content': true }}>
          <span
            class={{ 'checkout-modal-boleto__content--header-detail': true }}
          />
          <checkout-typography
            tag="h4"
            variation="header6"
            content={t('dialogs.boleto.title', this.locale)}
          />
          <checkout-typography
            tag="h5"
            variation="field"
            content={t('dialogs.boleto.subtitle', this.locale)}
          />
          <div class={{ 'checkout-modal-boleto__bar-code-informations': true }}>
            <checkout-typography
              tag="p"
              variation="field"
              content={this.boletoCode}
            />
            <checkout-clipboard-button
              label={t('dialogs.boleto.clipboardDescription', this.locale)}
              clipboardContent={this.boletoCode}
            />
          </div>
          <div
            class={{ 'checkout-modal-boleto__clipboard-button-mobile': true }}
          >
            <checkout-button
              label={t('dialogs.boleto.clipboard', this.locale)}
              clipboardContent={this.boletoCode}
            />
          </div>
          <div
            class={{
              'checkout-modal-boleto__payment-informations': true,
            }}
          >
            <p>
              <strong>{t('dialogs.boleto.amount', this.locale)} </strong>
              {formatCurrency(this.amount, this.currency)}
            </p>
            <p>
              <strong>
                {t('dialogs.boleto.expirationDate', this.locale)}{' '}
              </strong>
              {this.getExpirationDateFormatted()}
            </p>
          </div>

          <div
            class={{
              'checkout-modal-boleto__informations': true,
            }}
          >
            <checkout-typography
              tag="h5"
              color="darkness"
              variation="field"
              content={t('dialogs.boleto.importantMessage', this.locale)}
            />

            <ul>
              {!this.isSession && (
                <li>
                  {t('dialogs.boleto.importantMessageDefault', this.locale)}
                </li>
              )}

              <li>
                {t('dialogs.boleto.importantMessageFirst', this.locale, {
                  expirationDate: this.getExpirationDateFormatted(),
                })}
              </li>
            </ul>
          </div>
          <div
            class={{
              'checkout-modal-boleto__action-button': true,
            }}
          >
            <a href={this.boletoImageUrl} target="_blank">
              <checkout-typography
                tag="span"
                color="white"
                variation="button"
                content={t('dialogs.boleto.showBoleto', this.locale)}
              />
              <checkout-icon icon="newTab" />
            </a>

            {!!this.hasSuccessRedirectUrl && (
              <checkout-button
                label={
                  this.actionButtonLabel ||
                  t('dialogs.common.actionButtonLabel', this.locale)
                }
                onClicked={() => this.boletoActionButtonIsClicked.emit()}
              />
            )}
          </div>
        </section>
      </Host>
    )
  }
}
