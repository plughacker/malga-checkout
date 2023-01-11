import { newE2EPage } from '@stencil/core/testing'

describe('malga-payments-boleto', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<malga-payments-boleto></malga-payments-boleto>')

    const element = await page.find('malga-payments-boleto')
    expect(element).toHaveClass('hydrated')
  })
})
