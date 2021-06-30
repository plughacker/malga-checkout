import { newSpecPage } from '@stencil/core/testing'
import { CheckoutIcon } from './checkout-icon'

describe('checkout-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CheckoutIcon],
      html: `<checkout-icon></checkout-icon>`,
    })
    expect(page.root).toEqualHtml(`
      <checkout-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </checkout-icon>
    `)
  })
})
