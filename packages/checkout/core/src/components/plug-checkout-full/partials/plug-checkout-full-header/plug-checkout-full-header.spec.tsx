import { newSpecPage } from '@stencil/core/testing'
import { PlugCheckoutFullHeader } from './plug-checkout-full-header'

describe('plug-checkout-full-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlugCheckoutFullHeader],
      html: `<plug-checkout-full-header></plug-checkout-full-header>`,
    })
    expect(page.root).toEqualHtml(`
      <plug-checkout-full-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plug-checkout-full-header>
    `)
  })
})
