import { newSpecPage } from '@stencil/core/testing'
import { CheckoutClipboardButton } from './checkout-clipboard-button'

describe('checkout-clipboard-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CheckoutClipboardButton],
      html: `<checkout-clipboard-button></checkout-clipboard-button>`,
    })
    expect(page.root).toEqualHtml(`
      <checkout-clipboard-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </checkout-clipboard-button>
    `)
  })
})
