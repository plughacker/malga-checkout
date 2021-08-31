import { newSpecPage } from '@stencil/core/testing'
import { PlugCheckout } from './plug-checkout'

describe('plug-checkout', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlugCheckout],
      html: `<plug-checkout></plug-checkout>`,
    })
    expect(page.root).toEqualHtml(`
      <plug-checkout>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plug-checkout>
    `)
  })
})
