import { newSpecPage } from '@stencil/core/testing'
import { CheckoutDropdown } from './checkout-dropdown'

describe('checkout-dropdown', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CheckoutDropdown],
      html: `<checkout-dropdown></checkout-dropdown>`,
    })
    expect(page.root).toEqualHtml(`
      <checkout-dropdown>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </checkout-dropdown>
    `)
  })
})
