import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core'

@Component({
  tag: 'checkout-modal-error',
  styleUrl: 'checkout-modal-error.scss',
})
export class CheckoutModalError {
  @Prop() errorTitle?: string
  @Prop() errorSubtitle?: string
  @Prop() errorDescription?: string
  @Prop() errorActionButtonLabel = 'Tentar Novamente'
  @Prop() hasSuccessRedirectUrl?: boolean

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
        {!!this.hasSuccessRedirectUrl && (
          <checkout-button
            label={this.errorActionButtonLabel}
            onClick={() => this.errorActionButtonClicked.emit()}
          />
        )}
      </Host>
    )
  }
}
