import { newE2EPage } from '@stencil/core/testing'

describe('checkout-typography', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<checkout-typography></checkout-typography>')

    const element = await page.find('checkout-typography')
    expect(element).toHaveClass('hydrated')
  })
})
