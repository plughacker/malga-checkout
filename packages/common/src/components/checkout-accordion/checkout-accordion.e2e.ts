import { newE2EPage } from '@stencil/core/testing'

describe('checkout-accordion', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<checkout-accordion></checkout-accordion>')

    const element = await page.find('checkout-accordion')
    expect(element).toHaveClass('hydrated')
  })
})
