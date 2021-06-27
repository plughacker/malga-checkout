import { newE2EPage } from '@stencil/core/testing'

describe('plug-button', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<plug-button></plug-button>')

    const element = await page.find('plug-button')
    expect(element).toHaveClass('hydrated')
  })
})
