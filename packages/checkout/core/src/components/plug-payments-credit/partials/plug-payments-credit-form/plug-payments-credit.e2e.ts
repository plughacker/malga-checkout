import { newE2EPage } from '@stencil/core/testing'

describe('plug-payments-credit-form', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent(
      '<plug-payments-credit-form></plug-payments-credit-form>',
    )

    const element = await page.find('plug-payments-credit-form')
    expect(element).toHaveClass('hydrated')
  })
})
