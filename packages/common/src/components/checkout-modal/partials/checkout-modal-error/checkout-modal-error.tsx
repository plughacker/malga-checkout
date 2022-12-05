import { t } from '@plug-checkout/i18n'
import { Locale } from '@plug-checkout/i18n/dist/utils'
import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core'

@Component({
  tag: 'checkout-modal-error',
  styleUrl: 'checkout-modal-error.scss',
})
export class CheckoutModalError {
  @Prop() locale?: Locale
  @Prop() errorTitle?: string
  @Prop() errorSubtitle?: string
  @Prop() errorDescription?: string
  @Prop() errorActionButtonLabel?: string

  @Event() errorActionButtonClicked: EventEmitter<void>

  render() {
    return (
      <Host class={{ 'checkout-modal-error__container': true }}>
        <checkout-icon icon="error" />
        <checkout-typography
          tag="h3"
          variation="header5"
          color="white"
          content={this.errorTitle}
        />

        {this.errorTitle && (
          <checkout-typography
            tag="h4"
            variation="field"
            color="white"
            content={this.errorSubtitle}
          />
        )}

        <checkout-typography
          variation="field"
          color="white"
          content={this.errorDescription}
        />
        <checkout-button
          label={
            this.errorActionButtonLabel ||
            t('dialogs.error.actionButtonLabel', this.locale)
          }
          onClick={() => this.errorActionButtonClicked.emit()}
        />
      </Host>
    )
  }
}
