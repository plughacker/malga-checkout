import { newE2EPage } from '@stencil/core/testing'

describe('checkout-order-summary', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<checkout-order-summary></checkout-order-summary>')

    const element = await page.find('checkout-order-summary')
    expect(element).toHaveClass('hydrated')
  })
})
