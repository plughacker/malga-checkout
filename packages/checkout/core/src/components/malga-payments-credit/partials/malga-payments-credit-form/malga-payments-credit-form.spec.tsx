import { newSpecPage } from '@stencil/core/testing'
import { MalgaPaymentsCreditForm } from './malga-payments-credit-form'

describe('malga-payments-credit-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MalgaPaymentsCreditForm],
      html: `<malga-payments-credit-form></malga-payments-credit-form>`,
    })
    expect(page.root).toEqualHtml(`
      <malga-payments-credit-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </malga-payments-credit-form>
    `)
  })
})
