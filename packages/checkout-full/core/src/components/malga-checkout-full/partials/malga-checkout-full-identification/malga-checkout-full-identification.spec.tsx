import { newSpecPage } from '@stencil/core/testing'
import { MalgaCheckoutFullIdentification } from './malga-checkout-full-identification'

describe('malga-checkout-full-identification', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MalgaCheckoutFullIdentification],
      html: `<malga-checkout-full-identification></malga-checkout-full-identification>`,
    })
    expect(page.root).toEqualHtml(`
      <malga-checkout-full-identification>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </malga-checkout-full-identification>
    `)
  })
})
