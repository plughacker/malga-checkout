import { newSpecPage } from '@stencil/core/testing'
import { CheckoutCardBrand } from './checkout-card-brand'

describe('checkout-card-brand', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CheckoutCardBrand],
      html: `<checkout-card-brand></checkout-card-brand>`,
    })
    expect(page.root).toEqualHtml(`
      <checkout-card-brand>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </checkout-card-brand>
    `)
  })
})
