import { newE2EPage } from '@stencil/core/testing'

describe('checkout-button', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<checkout-button></checkout-button>')

    const element = await page.find('checkout-button')
    expect(element).toHaveClass('hydrated')
  })
})
