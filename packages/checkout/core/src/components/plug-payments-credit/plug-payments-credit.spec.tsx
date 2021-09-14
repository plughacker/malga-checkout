import { newSpecPage } from '@stencil/core/testing'
import { PlugPaymentsCredit } from './plug-payments-credit'

describe('plug-payments-credit', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlugPaymentsCredit],
      html: `<plug-payments-credit></plug-payments-credit>`,
    })
    expect(page.root).toEqualHtml(`
      <plug-payments-credit>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plug-payments-credit>
    `)
  })
})
