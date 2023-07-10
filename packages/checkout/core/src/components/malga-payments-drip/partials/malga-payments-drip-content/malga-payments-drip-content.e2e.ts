import { newE2EPage } from '@stencil/core/testing'

describe('malga-payments-drip-content', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent(
      '<malga-payments-drip-content></malga-payments-drip-content>',
    )

    const element = await page.find('malga-payments-drip-content')
    expect(element).toHaveClass('hydrated')
  })
})
