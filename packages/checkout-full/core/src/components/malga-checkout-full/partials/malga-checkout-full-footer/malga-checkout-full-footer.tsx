import { Locale } from '@malga-checkout/i18n/dist/utils'
import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core'

@Component({
  tag: 'malga-checkout-full-footer',
  styleUrl: 'malga-checkout-full-footer.scss',
})
export class MalgaCheckoutFullFooter {
  @Prop() description?: string
  @Prop() language: string

  @Event() changeLanguage: EventEmitter<{ value: Locale }>

  private handleChangeLanguage = (language: Locale) => {
    this.changeLanguage.emit({ value: language })
  }

  render() {
    return (
      <Host class={{ 'malga-checkout-full-footer__container': true }}>
        <footer class={{ 'malga-checkout-full-footer__content': true }}>
          <checkout-dropdown
            value={this.language}
            startIcon="globe"
            options={[
              { label: 'Português', value: 'pt' },
              { label: 'English', value: 'en' },
            ]}
            onChanged={({ detail: { value } }) =>
              this.handleChangeLanguage(value as Locale)
            }
          />
          {!!this.description && this.description}
        </footer>
      </Host>
    )
  }
}
