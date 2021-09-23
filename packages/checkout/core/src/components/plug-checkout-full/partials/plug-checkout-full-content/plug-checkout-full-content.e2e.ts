import { newE2EPage } from '@stencil/core/testing'

describe('plug-checkout-full-content', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent(
      '<plug-checkout-full-content></plug-checkout-full-content>',
    )

    const element = await page.find('plug-checkout-full-content')
    expect(element).toHaveClass('hydrated')
  })
})
