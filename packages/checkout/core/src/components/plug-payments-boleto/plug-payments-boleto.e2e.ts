import { newE2EPage } from '@stencil/core/testing'

describe('plug-payments-boleto', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<plug-payments-boleto></plug-payments-boleto>')

    const element = await page.find('plug-payments-boleto')
    expect(element).toHaveClass('hydrated')
  })
})
