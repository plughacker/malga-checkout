import { newSpecPage } from '@stencil/core/testing'
import { MalgaCheckout } from './malga-checkout'

describe('malga-checkout', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MalgaCheckout],
      html: `<malga-checkout></malga-checkout>`,
    })
    expect(page.root).toEqualHtml(`
      <malga-checkout>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </malga-checkout>
    `)
  })
})
