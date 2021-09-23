import { newE2EPage } from '@stencil/core/testing'

describe('plug-checkout-full-header', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent(
      '<plug-checkout-full-header></plug-checkout-full-header>',
    )

    const element = await page.find('plug-checkout-full-header')
    expect(element).toHaveClass('hydrated')
  })
})
