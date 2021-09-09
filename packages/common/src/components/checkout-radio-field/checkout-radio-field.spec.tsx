import { newSpecPage } from '@stencil/core/testing'
import { CheckoutRadioField } from './checkout-radio-field'

describe('checkout-radio-field', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CheckoutRadioField],
      html: `<checkout-radio-field></checkout-radio-field>`,
    })
    expect(page.root).toEqualHtml(`
      <checkout-radio-field>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </checkout-radio-field>
    `)
  })
})
