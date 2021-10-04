import { newSpecPage } from '@stencil/core/testing'
import { CheckoutModalError } from './checkout-modal-error'

describe('checkout-modal-error', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CheckoutModalError],
      html: `<checkout-modal-error></checkout-modal-error>`,
    })
    expect(page.root).toEqualHtml(`
      <checkout-modal-error>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </checkout-modal-error>
    `)
  })
})
