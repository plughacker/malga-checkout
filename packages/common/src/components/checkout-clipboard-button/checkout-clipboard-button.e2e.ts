import { newE2EPage } from '@stencil/core/testing'

describe('checkout-clipboard-button', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent(
      '<checkout-clipboard-button></checkout-clipboard-button>',
    )

    const element = await page.find('checkout-clipboard-button')
    expect(element).toHaveClass('hydrated')
  })
})
