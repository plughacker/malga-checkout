import { newE2EPage } from '@stencil/core/testing'

describe('plug-checkout-full-identification', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent(
      '<plug-checkout-full-identification></plug-checkout-full-identification>',
    )

    const element = await page.find('plug-checkout-full-identification')
    expect(element).toHaveClass('hydrated')
  })
})
