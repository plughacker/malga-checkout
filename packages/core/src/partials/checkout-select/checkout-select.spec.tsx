import { newSpecPage } from '@stencil/core/testing'
import { CheckoutSelect } from './checkout-select'

describe('checkout-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CheckoutSelect],
      html: `<checkout-select></checkout-select>`,
    })
    expect(page.root).toEqualHtml(`
      <checkout-select>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </checkout-select>
    `)
  })
})
