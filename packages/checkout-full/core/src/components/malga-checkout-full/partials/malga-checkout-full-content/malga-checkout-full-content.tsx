import { Component, Host, h } from '@stencil/core'

@Component({
  tag: 'malga-checkout-full-content',
  styleUrl: 'malga-checkout-full-content.scss',
})
export class MalgaCheckoutFullContent {
  render() {
    return (
      <Host class={{ 'malga-checkout-full-content__container': true }}>
        <main class={{ 'malga-checkout-full-content__main': true }}>
          <section class={{ 'malga-checkout-full-content__section': true }}>
            <slot name="order" />
          </section>

          <section class={{ 'malga-checkout-full-content__section': true }}>
            <slot name="informations" />
          </section>
        </main>
      </Host>
    )
  }
}
