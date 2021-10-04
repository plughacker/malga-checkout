import { newE2EPage } from '@stencil/core/testing'

describe('checkout-modal-pix', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<checkout-modal-pix></checkout-modal-pix>')

    const element = await page.find('checkout-modal-pix')
    expect(element).toHaveClass('hydrated')
  })
})
