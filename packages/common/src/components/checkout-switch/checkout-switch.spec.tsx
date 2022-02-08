import { newSpecPage } from '@stencil/core/testing'
import { CheckoutSwitch } from './checkout-switch'

describe('checkout-switch', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CheckoutSwitch],
      html: `<checkout-switch></checkout-switch>`,
    })
    expect(page.root).toEqualHtml(`
      <checkout-switch>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </checkout-switch>
    `)
  })
})
