import { newSpecPage } from '@stencil/core/testing'
import { MalgaPaymentsBoleto } from './malga-payments-boleto'

describe('malga-payments-boleto', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MalgaPaymentsBoleto],
      html: `<malga-payments-boleto></malga-payments-boleto>`,
    })
    expect(page.root).toEqualHtml(`
      <malga-payments-boleto>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </malga-payments-boleto>
    `)
  })
})
