import { newSpecPage } from '@stencil/core/testing'
import { MalgaPaymentsDripIframe } from './malga-payments-drip-iframe'

describe('malga-payments-drip-iframe', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MalgaPaymentsDripIframe],
      html: `<malga-payments-drip-iframe></malga-payments-drip-iframe>`,
    })
    expect(page.root).toEqualHtml(`
      <malga-payments-drip-iframe>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </malga-payments-drip-iframe>
    `)
  })
})
