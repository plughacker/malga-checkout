import { newSpecPage } from '@stencil/core/testing'
import { PlugPaymentsCreditModal } from './plug-payments-credit-modal'

describe('plug-payments-credit-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlugPaymentsCreditModal],
      html: `<plug-payments-credit-modal></plug-payments-credit-modal>`,
    })
    expect(page.root).toEqualHtml(`
      <plug-payments-credit-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plug-payments-credit-modal>
    `)
  })
})
