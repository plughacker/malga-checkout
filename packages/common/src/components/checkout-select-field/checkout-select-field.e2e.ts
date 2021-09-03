import { newE2EPage } from '@stencil/core/testing'

describe('checkout-select-field', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<checkout-select-field></checkout-select-field>')

    const element = await page.find('checkout-select-field')
    expect(element).toHaveClass('hydrated')
  })
})
