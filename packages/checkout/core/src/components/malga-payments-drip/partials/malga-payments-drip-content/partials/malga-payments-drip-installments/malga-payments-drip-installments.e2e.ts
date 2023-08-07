import { newE2EPage } from '@stencil/core/testing'

describe('malga-payments-drip-installments', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent(
      '<malga-payments-drip-installments></malga-payments-drip-installments>',
    )

    const element = await page.find('malga-payments-drip-installments')
    expect(element).toHaveClass('hydrated')
  })
})
