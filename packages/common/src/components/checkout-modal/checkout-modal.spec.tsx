import { newSpecPage } from '@stencil/core/testing'
import { CheckoutModal } from './checkout-modal'

describe('checkout-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CheckoutModal],
      html: `<checkout-modal></checkout-modal>`,
    })
    expect(page.root).toEqualHtml(`
      <checkout-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </checkout-modal>
    `)
  })
})
