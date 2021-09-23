import { newE2EPage } from '@stencil/core/testing'

describe('plug-checkout-full-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent(
      '<plug-checkout-full-footer></plug-checkout-full-footer>',
    )

    const element = await page.find('plug-checkout-full-footer')
    expect(element).toHaveClass('hydrated')
  })
})
