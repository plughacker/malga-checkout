import { newSpecPage } from '@stencil/core/testing'
import { MalgaCheckoutFullContent } from './malga-checkout-full-content'

describe('malga-checkout-full-content', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MalgaCheckoutFullContent],
      html: `<malga-checkout-full-content></malga-checkout-full-content>`,
    })
    expect(page.root).toEqualHtml(`
      <malga-checkout-full-content>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </malga-checkout-full-content>
    `)
  })
})
