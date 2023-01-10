import { newSpecPage } from '@stencil/core/testing'
import { MalgaCheckoutFullHeader } from './malga-checkout-full-header'

describe('malga-checkout-full-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MalgaCheckoutFullHeader],
      html: `<malga-checkout-full-header></malga-checkout-full-header>`,
    })
    expect(page.root).toEqualHtml(`
      <malga-checkout-full-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </malga-checkout-full-header>
    `)
  })
})
