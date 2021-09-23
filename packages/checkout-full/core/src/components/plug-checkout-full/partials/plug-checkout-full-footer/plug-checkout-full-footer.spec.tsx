import { newSpecPage } from '@stencil/core/testing'
import { PlugCheckoutFullFooter } from './plug-checkout-full-footer'

describe('plug-checkout-full-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlugCheckoutFullFooter],
      html: `<plug-checkout-full-footer></plug-checkout-full-footer>`,
    })
    expect(page.root).toEqualHtml(`
      <plug-checkout-full-footer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plug-checkout-full-footer>
    `)
  })
})
