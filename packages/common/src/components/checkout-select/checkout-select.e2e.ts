import { newE2EPage } from '@stencil/core/testing'

describe('checkout-select', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<checkout-select></checkout-select>')

    const element = await page.find('checkout-select')
    expect(element).toHaveClass('hydrated')
  })
})
