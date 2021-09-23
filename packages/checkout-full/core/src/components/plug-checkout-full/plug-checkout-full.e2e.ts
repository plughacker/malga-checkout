import { newE2EPage } from '@stencil/core/testing'

describe('plug-checkout-full', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<plug-checkout-full></plug-checkout-full>')

    const element = await page.find('plug-checkout-full')
    expect(element).toHaveClass('hydrated')
  })
})
