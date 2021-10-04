import { Component, Host, h, Prop } from '@stencil/core'
import { formatToReal } from '../../../../utils/currency'
import { formatDate } from '../../../../utils/date'

@Component({
  tag: 'checkout-modal-pix',
  styleUrl: 'checkout-modal-pix.scss',
})
export class CheckoutModalPix {
  @Prop() qrCodeIdentificator: string
  @Prop() qrCodeImageUrl: string
  @Prop() amount: number
  @Prop() expirationDate: string
  @Prop() expirationTime: number

  private getExpirationDateFormatted = () => formatDate(new Date())

  render() {
    return (
      <Host class={{ 'checkout-modal-pix__container': true }}>
        <header class={{ 'checkout-modal-pix__header': true }}>
          <checkout-icon icon="checkLarge" />
          <checkout-typography
            tag="h3"
            variation="header5"
            color="white"
            content="Pedido recebido com sucesso!"
          />
        </header>
        <section class={{ 'checkout-modal-pix__content': true }}>
          <checkout-typography
            tag="h4"
            variation="header6"
            content="PIX disponível para pagamento!"
          />
          <div class={{ 'checkout-modal-pix__qr-code-informations': true }}>
            <img src={this.qrCodeImageUrl} alt="QR Code" />
            <div
              class={{
                'checkout-modal-pix__qr-code-informations-clipboard': true,
              }}
            >
              <checkout-typography
                tag="p"
                variation="field"
                color="darkness"
                content={this.qrCodeIdentificator}
              />
              <checkout-clipboard-button
                label="Escaneie ou clique para copiar o código para pagar no aplicativo do seu banco."
                clipboardContent={this.qrCodeIdentificator}
              />
            </div>
          </div>
          <div
            class={{
              'checkout-modal-pix__payment-informations': true,
            }}
          >
            <p>
              <strong>Valor a pagar: </strong>
              {formatToReal(this.amount)}
            </p>
            <p>
              <strong>Vencimento: </strong>
              {this.getExpirationDateFormatted()}
            </p>
          </div>
          <div
            class={{
              'checkout-modal-pix__informations': true,
            }}
          >
            <checkout-typography
              tag="h5"
              color="darkness"
              variation="field"
              content="Informações Importantes"
            />

            <ul>
              <li>
                Vamos avisar por e-mail quando o banco identificar o depósito.
                Esse processo é automático.
              </li>
              <li>
                Caso o PIX não seja pago em até{' '}
                {this.getExpirationDateFormatted()}, seu pedido será cancelado
                automaticamente. Não pague após este horário.
              </li>
            </ul>
          </div>
        </section>
      </Host>
    )
  }
}
