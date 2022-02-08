import { Component, Host, h, ComponentInterface, Prop } from '@stencil/core'

import { CheckoutManualPaymentDescriptions } from './checkout-manual-payment.types'

@Component({
  tag: 'checkout-manual-payment',
  styleUrl: 'checkout-manual-payment.scss',
})
export class CheckoutManualPayment implements ComponentInterface {
  @Prop() fullWidth: boolean
  @Prop() paymentMethod: CheckoutManualPaymentDescriptions = 'pix'

  static DESCRIPTIONS = {
    pix: (
      <span slot="content" class="checkout-manual-payment__description">
        O QR Code do PIX será exibido{' '}
        <strong>após a confirmação de compra</strong>.
      </span>
    ),
    pixWithTimer: (
      <span slot="content" class="checkout-manual-payment__description">
        O QR Code será exibido após a confirmação de compra com{' '}
        <strong>validade de 10 minutos para ser pago</strong>. O pedido será
        cancelado automaticamente após esse período.
      </span>
    ),
    boleto: (
      <span slot="content" class="checkout-manual-payment__description">
        O boleto com o código de barras será exibido{' '}
        <strong>após a confirmação de compra</strong>.
      </span>
    ),
  }

  render() {
    return (
      <Host
        class={{
          'checkout-manual-payment__container': true,
          'checkout-manual-payment__container--full-width': !!this.fullWidth,
        }}
      >
        <checkout-typography tag="p">
          {CheckoutManualPayment.DESCRIPTIONS[this.paymentMethod]}
        </checkout-typography>
      </Host>
    )
  }
}
