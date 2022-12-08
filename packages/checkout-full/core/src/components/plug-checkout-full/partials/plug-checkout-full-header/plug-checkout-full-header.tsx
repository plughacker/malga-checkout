import { t } from '@plug-checkout/i18n'
import { Locale } from '@plug-checkout/i18n/dist/utils'
import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core'
import PlugBrand from '../../../../assets/plug-brand.svg'

@Component({
  tag: 'plug-checkout-full-header',
  styleUrl: 'plug-checkout-full-header.scss',
})
export class PlugCheckoutFullHeader {
  @Prop() locale?: Locale
  @Prop() brand: string
  @Prop() backRoute: string
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
          class={{ 'plug-checkout-full-header__logo': true }}
          src={this.brand}
          alt="Logo"
        />
      )
    }

    return (
      <i
        class={{ 'plug-checkout-full-header__logo': true }}
        innerHTML={PlugBrand}
      />
    )
  }

  private handleChangeLanguage = (language: Locale) => {
    this.changeLanguage.emit({ value: language })
  }

  render() {
    return (
      <Host class={{ 'plug-checkout-full-header__container': true }}>
        {this.isLoading && (
          <div
            class={{ 'plug-checkout-full-header__progress-horizontal': true }}
          >
            <div
              class={{ 'plug-checkout-full-header__bar-horizontal': true }}
            />
          </div>
        )}
        <header class={{ 'plug-checkout-full-header__content': true }}>
          <button
            class={{ 'plug-checkout-full-header__navigation': true }}
            onClick={this.handleNavigation}
          >
            <checkout-icon icon="arrowLeft" />
          </button>
          <div class={{ 'plug-checkout-full-header__brand-container': true }}>
            {this.renderImg()}
            <div class={{ 'plug-checkout-full-header__message': true }}>
              <checkout-icon icon="lock" />
              <h5>{t('page.safeEnvironment', this.locale)}</h5>
            </div>
          </div>
          <div class={{ 'plug-checkout-full-header__language': true }}>
            <checkout-dropdown
              value={this.language}
              options={[
                { label: 'Português', value: 'default' },
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
