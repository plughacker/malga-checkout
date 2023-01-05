import { newE2EPage } from '@stencil/core/testing'

describe('malga-checkout-full-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent(
      '<malga-checkout-full-footer></malga-checkout-full-footer>',
    )

    const element = await page.find('malga-checkout-full-footer')
    expect(element).toHaveClass('hydrated')
  })
})
