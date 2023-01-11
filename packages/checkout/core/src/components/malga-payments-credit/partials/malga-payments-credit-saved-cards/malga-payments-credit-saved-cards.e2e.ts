import { newE2EPage } from '@stencil/core/testing'

describe('malga-payments-credit-saved-cards', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent(
      '<malga-payments-credit-saved-cards></malga-payments-credit-saved-cards>',
    )

    const element = await page.find('malga-payments-credit-saved-cards')
    expect(element).toHaveClass('hydrated')
  })
})
