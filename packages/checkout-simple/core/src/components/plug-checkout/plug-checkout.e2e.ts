import { newE2EPage } from '@stencil/core/testing'

describe('plug-checkout', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<plug-checkout></plug-checkout>')

    const element = await page.find('plug-checkout')
    expect(element).toHaveClass('hydrated')
  })
})
