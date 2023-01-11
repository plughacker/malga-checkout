import { newE2EPage } from '@stencil/core/testing'

describe('malga-payments-pix', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<malga-payments-pix></malga-payments-pix>')

    const element = await page.find('malga-payments-pix')
    expect(element).toHaveClass('hydrated')
  })
})
