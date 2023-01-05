import { t } from '@malga-checkout/i18n'
import { Locale } from '@malga-checkout/i18n/dist/utils'
import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core'
import MalgaBrand from '../../../../assets/malga-brand.svg'

@Component({
  tag: 'malga-checkout-full-header',
  styleUrl: 'malga-checkout-full-header.scss',
})
export class MalgaCheckoutFullHeader {
  @Prop() locale?: Locale
  @Prop() backRoute?: string
  @Prop() brand: string
  @Prop() language: string
  @Prop() isLoading = false

  @Event() changeLanguage: EventEmitter<{ value: Locale }>

  private handleNavigation = () => {
    if (this.backRoute) {
      location.assign(this.backRoute)
      return
    }

    history.back()
  }

  private renderImg = () => {
    if (this.brand) {
      return (
        <img
          class={{ 'malga-checkout-full-header__logo': true }}
          src={this.brand}
          alt="Logo"
        />
      )
    }

    return (
      <i
        class={{ 'malga-checkout-full-header__logo': true }}
        innerHTML={MalgaBrand}
      />
    )
  }

  private handleChangeLanguage = (language: Locale) => {
    this.changeLanguage.emit({ value: language })
  }

  render() {
    return (
      <Host class={{ 'malga-checkout-full-header__container': true }}>
        {this.isLoading && (
          <div
            class={{ 'malga-checkout-full-header__progress-horizontal': true }}
          >
            <div
              class={{ 'malga-checkout-full-header__bar-horizontal': true }}
            />
          </div>
        )}
        <header class={{ 'malga-checkout-full-header__content': true }}>
          {!!this.backRoute && (
            <button
              class={{ 'malga-checkout-full-header__navigation': true }}
              onClick={this.handleNavigation}
            >
              <checkout-icon icon="arrowLeft" />
            </button>
          )}

          <div class={{ 'malga-checkout-full-header__brand-container': true }}>
            {this.renderImg()}
            <div class={{ 'malga-checkout-full-header__message': true }}>
              <checkout-icon icon="lock" />
              <h5>{t('page.safeEnvironment', this.locale)}</h5>
            </div>
          </div>
          <div class={{ 'malga-checkout-full-header__language': true }}>
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
          </div>
        </header>
      </Host>
    )
  }
}
