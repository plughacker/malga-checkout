import { newE2EPage } from '@stencil/core/testing'

describe('plug-input', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<plug-input></plug-input>')

    const element = await page.find('plug-input')
    expect(element).toHaveClass('hydrated')
  })
})
