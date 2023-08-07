import { newSpecPage } from '@stencil/core/testing'
import { MalgaPaymentsNuPayIframe } from './malga-payments-nupay-iframe'

describe('malga-payments-nupay-iframe', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MalgaPaymentsNuPayIframe],
      html: `<malga-payments-nupay-iframe></malga-payments-nupay-iframe>`,
    })
    expect(page.root).toEqualHtml(`
      <malga-payments-nupay-iframe>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </malga-payments-nupay-iframe>
    `)
  })
})
