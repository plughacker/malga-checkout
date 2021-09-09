import { newSpecPage } from '@stencil/core/testing'
import { PlugPaymentsBoleto } from './plug-payments-boleto'

describe('plug-payments-boleto', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlugPaymentsBoleto],
      html: `<plug-payments-boleto></plug-payments-boleto>`,
    })
    expect(page.root).toEqualHtml(`
      <plug-payments-boleto>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plug-payments-boleto>
    `)
  })
})
