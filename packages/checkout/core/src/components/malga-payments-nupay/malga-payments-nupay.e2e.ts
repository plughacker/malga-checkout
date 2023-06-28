import { newE2EPage } from '@stencil/core/testing'

describe('malga-payments-nupay', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<malga-payments-nupay></malga-payments-nupay>')

    const element = await page.find('malga-payments-nupay')
    expect(element).toHaveClass('hydrated')
  })
})
