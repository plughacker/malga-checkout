import { Component, Host, h, Prop } from '@stencil/core'

@Component({
  tag: 'plug-checkout-full-header',
  styleUrl: 'plug-checkout-full-header.scss',
})
export class PlugCheckoutFullHeader {
  @Prop() brand: string
  @Prop() backRoute: string
  @Prop() isLoading: boolean = false

  private handleNavigation = () => {
    if (this.backRoute) {
      location.assign(this.backRoute)
      return
    }

    history.back()
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
          <img
            class={{ 'plug-checkout-full-header__logo': true }}
            src={this.brand}
            alt="Logo"
          />
          <div class={{ 'plug-checkout-full-header__message': true }}>
            <checkout-icon icon="lock" />
            <h5>Ambiente seguro</h5>
          </div>
        </header>
      </Host>
    )
  }
}
