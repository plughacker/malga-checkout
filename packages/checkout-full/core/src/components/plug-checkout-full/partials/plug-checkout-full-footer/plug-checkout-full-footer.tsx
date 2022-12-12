import { Locale } from '@plug-checkout/i18n/dist/utils'
import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core'

@Component({
  tag: 'plug-checkout-full-footer',
  styleUrl: 'plug-checkout-full-footer.scss',
})
export class PlugCheckoutFullFooter {
  @Prop() description: string
  @Prop() language: string

  @Event() changeLanguage: EventEmitter<{ value: Locale }>

  private handleChangeLanguage = (language: Locale) => {
    this.changeLanguage.emit({ value: language })
  }

  render() {
    return (
      <Host class={{ 'plug-checkout-full-footer__container': true }}>
        <footer class={{ 'plug-checkout-full-footer__content': true }}>
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
          {this.description}
        </footer>
      </Host>
    )
  }
}
