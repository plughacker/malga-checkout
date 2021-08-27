import { newE2EPage } from '@stencil/core/testing'

describe('checkout-error-message', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<checkout-error-message></checkout-error-message>')

    const element = await page.find('checkout-error-message')
    expect(element).toHaveClass('hydrated')
  })
})
