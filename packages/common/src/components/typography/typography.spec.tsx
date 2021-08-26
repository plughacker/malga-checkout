import { newSpecPage } from '@stencil/core/testing'
import { CheckoutTypography } from './checkout-typography'

describe('checkout-typography', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CheckoutTypography],
      html: `<checkout-typography></checkout-typography>`,
    })
    expect(page.root).toEqualHtml(`
      <checkout-typography>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </checkout-typography>
    `)
  })
})
