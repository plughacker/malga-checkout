import { newSpecPage } from '@stencil/core/testing'
import { MalgaPaymentsCreditSavedCards } from './malga-payments-credit-saved-cards'

describe('malga-payments-credit-saved-cards', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MalgaPaymentsCreditSavedCards],
      html: `<malga-payments-credit-saved-cards></malga-payments-credit-saved-cards>`,
    })
    expect(page.root).toEqualHtml(`
      <malga-payments-credit-saved-cards>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </malga-payments-credit-saved-cards>
    `)
  })
})
