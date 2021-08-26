import { newSpecPage } from '@stencil/core/testing'
import { PlugCheckoutForm } from './plug-checkout-form'

describe('plug-checkout-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlugCheckoutForm],
      html: `<plug-checkout-form></plug-checkout-form>`,
    })
    expect(page.root).toEqualHtml(`
      <plug-checkout-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plug-checkout-form>
    `)
  })
})
