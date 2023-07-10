import { newSpecPage } from '@stencil/core/testing'
import { MalgaPaymentsDripContent } from './malga-payments-drip-content'

describe('malga-payments-drip-content', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MalgaPaymentsDripContent],
      html: `<malga-payments-drip-content></malga-payments-drip-content>`,
    })
    expect(page.root).toEqualHtml(`
      <malga-payments-drip-content>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </malga-payments-drip-content>
    `)
  })
})
