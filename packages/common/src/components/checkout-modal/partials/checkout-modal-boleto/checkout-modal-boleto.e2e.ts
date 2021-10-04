import { newE2EPage } from '@stencil/core/testing'

describe('checkout-modal-boleto', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<checkout-modal-boleto></checkout-modal-boleto>')

    const element = await page.find('checkout-modal-boleto')
    expect(element).toHaveClass('hydrated')
  })
})
