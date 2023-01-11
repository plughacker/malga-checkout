import { newE2EPage } from '@stencil/core/testing'

describe('malga-payments', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<malga-payments></malga-payments>')

    const element = await page.find('malga-payments')
    expect(element).toHaveClass('hydrated')
  })
})
