import { newE2EPage } from '@stencil/core/testing'

describe('malga-payments-nupay-iframe', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent(
      '<malga-payments-nupay-iframe></malga-payments-nupay-iframe>',
    )

    const element = await page.find('malga-payments-nupay-iframe')
    expect(element).toHaveClass('hydrated')
  })
})
