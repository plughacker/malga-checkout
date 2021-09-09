import { newSpecPage } from '@stencil/core/testing'
import { PlugPaymentsPix } from './plug-payments-pix'

describe('plug-payments-pix', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlugPaymentsPix],
      html: `<plug-payments-pix></plug-payments-pix>`,
    })
    expect(page.root).toEqualHtml(`
      <plug-payments-pix>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plug-payments-pix>
    `)
  })
})
