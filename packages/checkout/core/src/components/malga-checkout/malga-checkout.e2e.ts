import { newE2EPage } from '@stencil/core/testing'

describe('malga-checkout', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<malga-checkout></malga-checkout>')

    const element = await page.find('malga-checkout')
    expect(element).toHaveClass('hydrated')
  })
})
