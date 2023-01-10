import { newE2EPage } from '@stencil/core/testing'

describe('malga-payments-credit', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<malga-payments-credit></malga-payments-credit>')

    const element = await page.find('malga-payments-credit')
    expect(element).toHaveClass('hydrated')
  })
})
