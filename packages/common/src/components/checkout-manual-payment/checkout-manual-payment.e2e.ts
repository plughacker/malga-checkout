import { newE2EPage } from '@stencil/core/testing'

describe('checkout-manual-payment', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<checkout-manual-payment></checkout-manual-payment>')

    const element = await page.find('checkout-manual-payment')
    expect(element).toHaveClass('hydrated')
  })
})
