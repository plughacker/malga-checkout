import { newSpecPage } from '@stencil/core/testing'
import { MalgaPaymentsPix } from './malga-payments-pix'

describe('malga-payments-pix', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MalgaPaymentsPix],
      html: `<malga-payments-pix></malga-payments-pix>`,
    })
    expect(page.root).toEqualHtml(`
      <malga-payments-pix>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </malga-payments-pix>
    `)
  })
})
