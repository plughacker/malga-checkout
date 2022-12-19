import { t } from '@plug-checkout/i18n'
import { Locale } from '@plug-checkout/i18n/dist/utils'
import { Component, Host, h, Event, EventEmitter, Prop } from '@stencil/core'

@Component({
  tag: 'checkout-modal-success',
  styleUrl: 'checkout-modal-success.scss',
})
export class CheckoutModalSuccess {
  @Prop() locale?: Locale
  @Prop() successDescription?: string
  @Prop() successActionButtonLabel?: string
  @Prop() hasSuccessRedirectUrl?: boolean

  @Event() successActionButtonClicked: EventEmitter<void>

  render() {
    return (
      <Host class={{ 'checkout-modal-success__container': true }}>
        <checkout-icon icon="checkLarge" />
        <checkout-typography
          tag="h3"
          variation="header5"
          color="white"
          content={
            this.successDescription ||
            t('dialogs.success.description', this.locale)
          }
        />
        {!!this.hasSuccessRedirectUrl && (
          <checkout-button
            label={
              this.successActionButtonLabel ||
              t('dialogs.success.actionButtonLabel', this.locale)
            }
            onClicked={() => this.successActionButtonClicked.emit()}
          />
        )}
      </Host>
    )
  }
}
