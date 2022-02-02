import { newE2EPage } from '@stencil/core/testing'

describe('checkout-card-brand', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<checkout-card-brand></checkout-card-brand>')

    const element = await page.find('checkout-card-brand')
    expect(element).toHaveClass('hydrated')
  })
})
