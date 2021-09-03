import { newSpecPage } from '@stencil/core/testing'
import { CheckoutTextField } from './checkout-text-field'

describe('checkout-text-field', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CheckoutTextField],
      html: `<checkout-text-field></checkout-text-field>`,
    })
    expect(page.root).toEqualHtml(`
      <checkout-text-field>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </checkout-text-field>
    `)
  })
})
