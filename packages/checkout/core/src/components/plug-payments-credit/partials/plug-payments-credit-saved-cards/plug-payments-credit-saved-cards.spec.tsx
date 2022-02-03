import { newSpecPage } from '@stencil/core/testing'
import { PlugPaymentsCreditSavedCards } from './plug-payments-credit-saved-cards'

describe('plug-payments-credit-saved-cards', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlugPaymentsCreditSavedCards],
      html: `<plug-payments-credit-saved-cards></plug-payments-credit-saved-cards>`,
    })
    expect(page.root).toEqualHtml(`
      <plug-payments-credit-saved-cards>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plug-payments-credit-saved-cards>
    `)
  })
})
