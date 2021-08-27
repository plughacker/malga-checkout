import { newSpecPage } from '@stencil/core/testing'
import { CheckoutButton } from './checkout-button'

describe('checkout-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CheckoutButton],
      html: `<checkout-button></checkout-button>`,
    })
    expect(page.root).toEqualHtml(`
      <checkout-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </checkout-button>
    `)
  })
})
