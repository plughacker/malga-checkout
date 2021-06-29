import { newSpecPage } from '@stencil/core/testing'
import { PlugIcon } from './plug-icon'

describe('plug-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlugIcon],
      html: `<plug-icon></plug-icon>`,
    })
    expect(page.root).toEqualHtml(`
      <plug-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plug-icon>
    `)
  })
})
