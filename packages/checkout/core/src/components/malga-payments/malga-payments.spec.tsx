import { newSpecPage } from '@stencil/core/testing'
import { MalgaPayments } from './malga-payments'

describe('malga-payments', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MalgaPayments],
      html: `<malga-payments></malga-payments>`,
    })
    expect(page.root).toEqualHtml(`
      <malga-payments>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </malga-payments>
    `)
  })
})
