import { newE2EPage } from '@stencil/core/testing'

describe('plug-payments-credit', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<plug-payments-credit></plug-payments-credit>')

    const element = await page.find('plug-payments-credit')
    expect(element).toHaveClass('hydrated')
  })
})
