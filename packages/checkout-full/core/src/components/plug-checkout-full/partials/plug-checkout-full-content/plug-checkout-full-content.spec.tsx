import { newSpecPage } from '@stencil/core/testing'
import { PlugCheckoutFullContent } from './plug-checkout-full-content'

describe('plug-checkout-full-content', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlugCheckoutFullContent],
      html: `<plug-checkout-full-content></plug-checkout-full-content>`,
    })
    expect(page.root).toEqualHtml(`
      <plug-checkout-full-content>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plug-checkout-full-content>
    `)
  })
})
