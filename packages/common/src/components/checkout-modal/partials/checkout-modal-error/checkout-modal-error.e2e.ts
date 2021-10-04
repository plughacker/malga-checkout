import { newE2EPage } from '@stencil/core/testing'

describe('checkout-modal-error', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<checkout-modal-error></checkout-modal-error>')

    const element = await page.find('checkout-modal-error')
    expect(element).toHaveClass('hydrated')
  })
})
