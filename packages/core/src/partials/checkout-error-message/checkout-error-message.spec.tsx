import { newSpecPage } from '@stencil/core/testing'
import { CheckoutErrorMessage } from './checkout-error-message'

describe('checkout-error-message', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CheckoutErrorMessage],
      html: `<checkout-error-message></checkout-error-message>`,
    })
    expect(page.root).toEqualHtml(`
      <checkout-error-message>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </checkout-error-message>
    `)
  })
})
