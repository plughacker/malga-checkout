import {
  Component,
  Host,
  h,
  ComponentInterface,
  Prop,
  Event,
  EventEmitter,
} from '@stencil/core'

import { CheckoutManualPaymentDescriptions } from './checkout-manual-payment.types'

@Component({
  tag: 'checkout-manual-payment',
  styleUrl: 'checkout-manual-payment.scss',
})
export class CheckoutManualPayment implements ComponentInterface {
  @Prop() paymentMethod: CheckoutManualPaymentDescriptions = 'pix'

  @Event() onPaymentClick!: EventEmitter<void>

  private onClick = () => {
    this.onPaymentClick.emit()
  }

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
      <Host class={{ 'checkout-manual-payment__container': true }}>
        <checkout-typography tag="p">
          {CheckoutManualPayment.DESCRIPTIONS[this.paymentMethod]}
        </checkout-typography>
        <div class={{ 'checkout-manual-paymnet__content': true }}>
          <checkout-button label="Pagar" onClick={this.onClick} />
          <checkout-icon icon="poweredByPlug" />
        </div>
      </Host>
    )
  }
}
