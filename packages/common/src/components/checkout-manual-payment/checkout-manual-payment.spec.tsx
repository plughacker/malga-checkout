import { newSpecPage } from '@stencil/core/testing'
import { CheckoutManualPayment } from './checkout-manual-payment'

describe('checkout-manual-payment', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CheckoutManualPayment],
      html: `<checkout-manual-payment></checkout-manual-payment>`,
    })
    expect(page.root).toEqualHtml(`
      <checkout-manual-payment>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </checkout-manual-payment>
    `)
  })
})
