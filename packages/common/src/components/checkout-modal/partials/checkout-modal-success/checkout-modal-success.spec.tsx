import { newSpecPage } from '@stencil/core/testing'
import { CheckoutModalSuccess } from './checkout-modal-success'

describe('checkout-modal-success', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CheckoutModalSuccess],
      html: `<checkout-modal-success></checkout-modal-success>`,
    })
    expect(page.root).toEqualHtml(`
      <checkout-modal-success>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </checkout-modal-success>
    `)
  })
})
