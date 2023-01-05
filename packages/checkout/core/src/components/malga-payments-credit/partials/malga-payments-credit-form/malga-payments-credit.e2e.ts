import { newE2EPage } from '@stencil/core/testing'

describe('malga-payments-credit-form', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent(
      '<malga-payments-credit-form></malga-payments-credit-form>',
    )

    const element = await page.find('malga-payments-credit-form')
    expect(element).toHaveClass('hydrated')
  })
})
