import { newSpecPage } from '@stencil/core/testing'
import { CheckoutOrderSummary } from './checkout-order-summary'

describe('checkout-order-summary', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CheckoutOrderSummary],
      html: `<checkout-order-summary></checkout-order-summary>`,
    })
    expect(page.root).toEqualHtml(`
      <checkout-order-summary>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </checkout-order-summary>
    `)
  })
})
