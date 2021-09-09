import { newE2EPage } from '@stencil/core/testing'

describe('checkout-radio-field', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<checkout-radio-field></checkout-radio-field>')

    const element = await page.find('checkout-radio-field')
    expect(element).toHaveClass('hydrated')
  })
})
