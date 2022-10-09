import { newE2EPage } from '@stencil/core/testing'

describe('checkout-loader', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<checkout-loader></checkout-loader>')

    const element = await page.find('checkout-loader')
    expect(element).toHaveClass('hydrated')
  })
})
