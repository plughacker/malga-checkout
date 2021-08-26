import { newE2EPage } from '@stencil/core/testing'

describe('checkout-input', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<checkout-input></checkout-input>')

    const element = await page.find('checkout-input')
    expect(element).toHaveClass('hydrated')
  })
})
