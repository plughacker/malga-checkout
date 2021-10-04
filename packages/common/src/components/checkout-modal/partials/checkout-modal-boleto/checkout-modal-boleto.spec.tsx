import { newSpecPage } from '@stencil/core/testing'
import { CheckoutModalBoleto } from './checkout-modal-boleto'

describe('checkout-modal-boleto', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CheckoutModalBoleto],
      html: `<checkout-modal-boleto></checkout-modal-boleto>`,
    })
    expect(page.root).toEqualHtml(`
      <checkout-modal-boleto>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </checkout-modal-boleto>
    `)
  })
})
