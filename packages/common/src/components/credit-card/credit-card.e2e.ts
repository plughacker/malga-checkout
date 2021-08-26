import { newE2EPage } from '@stencil/core/testing'

describe('checkout-credit-card', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<checkout-credit-card></checkout-credit-card>')

    const element = await page.find('checkout-credit-card')
    expect(element).toHaveClass('hydrated')
  })
})
