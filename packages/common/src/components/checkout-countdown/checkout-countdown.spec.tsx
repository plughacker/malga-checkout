import { newSpecPage } from '@stencil/core/testing'
import { CheckoutCountdown } from './checkout-countdown'

describe('checkout-countdown', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CheckoutCountdown],
      html: `<checkout-countdown></checkout-countdown>`,
    })
    expect(page.root).toEqualHtml(`
      <checkout-countdown>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </checkout-countdown>
    `)
  })
})
