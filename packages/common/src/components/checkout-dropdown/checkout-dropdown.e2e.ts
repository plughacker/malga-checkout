import { newE2EPage } from '@stencil/core/testing';

describe('checkout-dropdown', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<checkout-dropdown></checkout-dropdown>');

    const element = await page.find('checkout-dropdown');
    expect(element).toHaveClass('hydrated');
  });
});
