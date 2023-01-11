import { newE2EPage } from '@stencil/core/testing'

describe('malga-checkout-full', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<malga-checkout-full></malga-checkout-full>')

    const element = await page.find('malga-checkout-full')
    expect(element).toHaveClass('hydrated')
  })
})
