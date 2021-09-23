import { newSpecPage } from '@stencil/core/testing'
import { PlugCheckoutFullIdentification } from './plug-checkout-full-identification'

describe('plug-checkout-full-identification', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlugCheckoutFullIdentification],
      html: `<plug-checkout-full-identification></plug-checkout-full-identification>`,
    })
    expect(page.root).toEqualHtml(`
      <plug-checkout-full-identification>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plug-checkout-full-identification>
    `)
  })
})
