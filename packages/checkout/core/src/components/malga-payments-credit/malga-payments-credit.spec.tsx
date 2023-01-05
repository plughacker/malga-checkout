import { newSpecPage } from '@stencil/core/testing'
import { MalgaPaymentsCredit } from './malga-payments-credit'

describe('malga-payments-credit', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MalgaPaymentsCredit],
      html: `<malga-payments-credit></malga-payments-credit>`,
    })
    expect(page.root).toEqualHtml(`
      <malga-payments-credit>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </malga-payments-credit>
    `)
  })
})
