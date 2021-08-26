import { newE2EPage } from '@stencil/core/testing'

describe('plug-checkout-form', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<plug-checkout-form></plug-checkout-form>')

    const element = await page.find('plug-checkout-form')
    expect(element).toHaveClass('hydrated')
  })
})
