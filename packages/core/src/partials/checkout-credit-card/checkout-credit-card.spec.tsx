import { newSpecPage } from '@stencil/core/testing'
import { CheckoutCreditCard } from './checkout-credit-card'

describe('checkout-credit-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CheckoutCreditCard],
      html: `<checkout-credit-card></checkout-credit-card>`,
    })
    expect(page.root).toEqualHtml(`
      <checkout-credit-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </checkout-credit-card>
    `)
  })
})
