import { newE2EPage } from '@stencil/core/testing'

describe('malga-checkout-full-identification', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent(
      '<malga-checkout-full-identification></malga-checkout-full-identification>',
    )

    const element = await page.find('malga-checkout-full-identification')
    expect(element).toHaveClass('hydrated')
  })
})
