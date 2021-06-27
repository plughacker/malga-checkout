import { newSpecPage } from '@stencil/core/testing'
import { PlugButton } from './plug-button'

describe('plug-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlugButton],
      html: `<plug-button></plug-button>`,
    })
    expect(page.root).toEqualHtml(`
      <plug-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plug-button>
    `)
  })
})
