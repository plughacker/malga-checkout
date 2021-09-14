import { newSpecPage } from '@stencil/core/testing'
import { PlugPaymentsCreditForm } from './plug-payments-credit-form'

describe('plug-payments-credit-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlugPaymentsCreditForm],
      html: `<plug-payments-credit-form></plug-payments-credit-form>`,
    })
    expect(page.root).toEqualHtml(`
      <plug-payments-credit-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plug-payments-credit-form>
    `)
  })
})
