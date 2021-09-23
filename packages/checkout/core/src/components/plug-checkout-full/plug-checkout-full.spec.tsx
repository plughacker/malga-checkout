import { newSpecPage } from '@stencil/core/testing'
import { PlugCheckoutFull } from './plug-checkout-full'

describe('plug-checkout-full', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlugCheckoutFull],
      html: `<plug-checkout-full></plug-checkout-full>`,
    })
    expect(page.root).toEqualHtml(`
      <plug-checkout-full>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plug-checkout-full>
    `)
  })
})
