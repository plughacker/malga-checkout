import { Component, Host, h } from '@stencil/core'

@Component({
  tag: 'plug-payments-boleto',
  styleUrl: 'plug-payments-boleto.scss',
})
export class PlugPaymentsBoleto {
  render() {
    return (
      <Host>
        <checkout-manual-payment fullWidth paymentMethod="boleto" />
      </Host>
    )
  }
}
