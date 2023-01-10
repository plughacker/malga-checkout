import { newSpecPage } from '@stencil/core/testing'
import { MalgaCheckoutFull } from './malga-checkout-full'

describe('malga-checkout-full', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MalgaCheckoutFull],
      html: `<malga-checkout-full></malga-checkout-full>`,
    })
    expect(page.root).toEqualHtml(`
      <malga-checkout-full>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </malga-checkout-full>
    `)
  })
})
