import { newE2EPage } from '@stencil/core/testing'

describe('malga-payments-drip', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<malga-payments-drip></malga-payments-drip>')

    const element = await page.find('malga-payments-drip')
    expect(element).toHaveClass('hydrated')
  })
})
