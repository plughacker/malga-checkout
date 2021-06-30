import { newSpecPage } from '@stencil/core/testing'
import { CheckoutInput } from './checkout-input'

describe('checkout-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CheckoutInput],
      html: `<checkout-input></checkout-input>`,
    })
    expect(page.root).toEqualHtml(`
      <checkout-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </checkout-input>
    `)
  })
})
