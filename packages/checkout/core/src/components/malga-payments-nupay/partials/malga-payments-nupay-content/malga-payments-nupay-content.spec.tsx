import { newSpecPage } from '@stencil/core/testing'
import { MalgaPaymentsNuPayContent } from './malga-payments-nupay-content'

describe('malga-payments-nupay-content', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MalgaPaymentsNuPayContent],
      html: `<malga-payments-nupay-content></malga-payments-nupay-content>`,
    })
    expect(page.root).toEqualHtml(`
      <malga-payments-nupay-content>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </malga-payments-nupay-content>
    `)
  })
})
