import { newSpecPage } from '@stencil/core/testing'
import { PlugPayments } from './plug-payments'

describe('plug-payments', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlugPayments],
      html: `<plug-payments></plug-payments>`,
    })
    expect(page.root).toEqualHtml(`
      <plug-payments>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plug-payments>
    `)
  })
})
