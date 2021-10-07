import { newE2EPage } from '@stencil/core/testing'

describe('checkout-countdown', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<checkout-countdown></checkout-countdown>')

    const element = await page.find('checkout-countdown')
    expect(element).toHaveClass('hydrated')
  })
})
