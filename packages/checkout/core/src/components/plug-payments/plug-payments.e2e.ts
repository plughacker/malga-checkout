import { newE2EPage } from '@stencil/core/testing'

describe('plug-payments', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<plug-payments></plug-payments>')

    const element = await page.find('plug-payments')
    expect(element).toHaveClass('hydrated')
  })
})
