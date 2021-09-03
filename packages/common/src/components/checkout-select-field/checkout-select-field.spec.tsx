import { newSpecPage } from '@stencil/core/testing'
import { CheckoutSelectField } from './checkout-select-field'

describe('checkout-select-field', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CheckoutSelectField],
      html: `<checkout-select-field></checkout-select-field>`,
    })
    expect(page.root).toEqualHtml(`
      <checkout-select-field>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </checkout-select-field>
    `)
  })
})
