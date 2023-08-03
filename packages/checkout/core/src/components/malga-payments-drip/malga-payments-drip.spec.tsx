import { newSpecPage } from '@stencil/core/testing'
import { MalgaPaymentsDrip } from './malga-payments-drip'

describe('malga-payments-drip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MalgaPaymentsDrip],
      html: `<malga-payments-drip></malga-payments-drip>`,
    })
    expect(page.root).toEqualHtml(`
      <malga-payments-drip>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </malga-payments-drip>
    `)
  })
})
