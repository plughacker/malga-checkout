import { newSpecPage } from '@stencil/core/testing'
import { CheckoutAccordion } from './checkout-accordion'

describe('checkout-accordion', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CheckoutAccordion],
      html: `<checkout-accordion></checkout-accordion>`,
    })
    expect(page.root).toEqualHtml(`
      <checkout-accordion>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </checkout-accordion>
    `)
  })
})
