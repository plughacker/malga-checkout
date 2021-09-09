import { newE2EPage } from '@stencil/core/testing'

describe('plug-payments-pix', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<plug-payments-pix></plug-payments-pix>')

    const element = await page.find('plug-payments-pix')
    expect(element).toHaveClass('hydrated')
  })
})
