import { newE2EPage } from '@stencil/core/testing'

describe('checkout-modal-success', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<checkout-modal-success></checkout-modal-success>')

    const element = await page.find('checkout-modal-success')
    expect(element).toHaveClass('hydrated')
  })
})
