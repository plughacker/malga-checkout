import { newSpecPage } from '@stencil/core/testing'
import { MalgaCheckoutFullFooter } from './malga-checkout-full-footer'

describe('malga-checkout-full-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MalgaCheckoutFullFooter],
      html: `<malga-checkout-full-footer></malga-checkout-full-footer>`,
    })
    expect(page.root).toEqualHtml(`
      <malga-checkout-full-footer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </malga-checkout-full-footer>
    `)
  })
})
