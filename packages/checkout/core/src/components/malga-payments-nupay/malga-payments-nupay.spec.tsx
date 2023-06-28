import { newSpecPage } from '@stencil/core/testing'
import { MalgaPaymentsNuPay } from './malga-payments-nupay'

describe('malga-payments-nupay', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MalgaPaymentsNuPay],
      html: `<malga-payments-nupay></malga-payments-nupay>`,
    })
    expect(page.root).toEqualHtml(`
      <malga-payments-nupay>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </malga-payments-nupay>
    `)
  })
})
