import { Component, Host, h } from '@stencil/core'

@Component({
  tag: 'plug-checkout-full-content',
  styleUrl: 'plug-checkout-full-content.scss',
})
export class PlugCheckoutFullContent {
  render() {
    return (
      <Host class={{ 'plug-checkout-full-content__container': true }}>
        <main class={{ 'plug-checkout-full-content__main': true }}>
          <section class={{ 'plug-checkout-full-content__section': true }}>
            <slot name="order" />
          </section>

          <section class={{ 'plug-checkout-full-content__section': true }}>
            <slot name="informations" />
          </section>
        </main>
      </Host>
    )
  }
}
