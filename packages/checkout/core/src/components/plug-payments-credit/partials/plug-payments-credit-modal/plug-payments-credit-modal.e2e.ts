import { newE2EPage } from '@stencil/core/testing'

describe('plug-payments-credit-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent(
      '<plug-payments-credit-modal></plug-payments-credit-modal>',
    )

    const element = await page.find('plug-payments-credit-modal')
    expect(element).toHaveClass('hydrated')
  })
})
