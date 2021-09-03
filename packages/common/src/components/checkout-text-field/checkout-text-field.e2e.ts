import { newE2EPage } from '@stencil/core/testing'

describe('checkout-text-field', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<checkout-text-field></checkout-text-field>')

    const element = await page.find('checkout-text-field')
    expect(element).toHaveClass('hydrated')
  })
})
