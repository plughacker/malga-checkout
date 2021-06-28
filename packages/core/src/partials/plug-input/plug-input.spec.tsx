import { newSpecPage } from '@stencil/core/testing'
import { PlugInput } from './plug-input'

describe('plug-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlugInput],
      html: `<plug-input></plug-input>`,
    })
    expect(page.root).toEqualHtml(`
      <plug-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plug-input>
    `)
  })
})
