import { newE2EPage } from '@stencil/core/testing'

describe('checkout-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<checkout-modal></checkout-modal>')

    const element = await page.find('checkout-modal')
    expect(element).toHaveClass('hydrated')
  })
})
