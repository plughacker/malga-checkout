import { newE2EPage } from '@stencil/core/testing'

describe('checkout-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<checkout-icon></checkout-icon>')

    const element = await page.find('checkout-icon')
    expect(element).toHaveClass('hydrated')
  })
})
