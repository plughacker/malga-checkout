import { newSpecPage } from '@stencil/core/testing'
import { CheckoutModalPix } from './checkout-modal-pix'

describe('checkout-modal-pix', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CheckoutModalPix],
      html: `<checkout-modal-pix></checkout-modal-pix>`,
    })
    expect(page.root).toEqualHtml(`
      <checkout-modal-pix>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </checkout-modal-pix>
    `)
  })
})
