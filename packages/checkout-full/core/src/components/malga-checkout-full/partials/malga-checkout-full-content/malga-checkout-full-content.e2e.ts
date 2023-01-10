import { newE2EPage } from '@stencil/core/testing'

describe('malga-checkout-full-content', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent(
      '<malga-checkout-full-content></malga-checkout-full-content>',
    )

    const element = await page.find('malga-checkout-full-content')
    expect(element).toHaveClass('hydrated')
  })
})
