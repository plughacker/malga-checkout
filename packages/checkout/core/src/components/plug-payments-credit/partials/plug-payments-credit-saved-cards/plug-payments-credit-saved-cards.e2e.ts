import { newE2EPage } from '@stencil/core/testing'

describe('plug-payments-credit-saved-cards', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent(
      '<plug-payments-credit-saved-cards></plug-payments-credit-saved-cards>',
    )

    const element = await page.find('plug-payments-credit-saved-cards')
    expect(element).toHaveClass('hydrated')
  })
})
