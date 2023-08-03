import { newE2EPage } from '@stencil/core/testing'

describe('malga-payments-nupay-content', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent(
      '<malga-payments-nupay-content></malga-payments-nupay-content>',
    )

    const element = await page.find('malga-payments-nupay-content')
    expect(element).toHaveClass('hydrated')
  })
})
