import { newE2EPage } from '@stencil/core/testing'

describe('malga-checkout-full-header', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent(
      '<malga-checkout-full-header></malga-checkout-full-header>',
    )

    const element = await page.find('malga-checkout-full-header')
    expect(element).toHaveClass('hydrated')
  })
})
