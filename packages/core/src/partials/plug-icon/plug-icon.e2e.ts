import { newE2EPage } from '@stencil/core/testing'

describe('plug-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<plug-icon></plug-icon>')

    const element = await page.find('plug-icon')
    expect(element).toHaveClass('hydrated')
  })
})
