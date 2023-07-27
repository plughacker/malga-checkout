import { newE2EPage } from '@stencil/core/testing'

describe('malga-payments-drip-iframe', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent(
      '<malga-payments-drip-iframe></malga-payments-drip-iframe>',
    )

    const element = await page.find('malga-payments-drip-iframe')
    expect(element).toHaveClass('hydrated')
  })
})
