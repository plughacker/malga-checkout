import { newSpecPage } from '@stencil/core/testing'
import { MalgaPaymentsDripInstallments } from './malga-payments-drip-installments'

describe('malga-payments-drip-installments', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MalgaPaymentsDripInstallments],
      html: `<malga-payments-drip-installments></malga-payments-drip-installments>`,
    })
    expect(page.root).toEqualHtml(`
      <malga-payments-drip-installments>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </malga-payments-drip-installments>
    `)
  })
})
