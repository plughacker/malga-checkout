import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core'
import { formatDate, formatToReal } from '@plug-checkout/utils'

@Component({
  tag: 'checkout-modal-boleto',
  styleUrl: 'checkout-modal-boleto.scss',
})
export class CheckoutModalBoleto {
  @Prop() boletoCode: string
  @Prop() boletoImageUrl: string
  @Prop() amount: number
  @Prop() expirationDate: string
  @Prop() actionButtonLabel = 'Continuar'

  @Event() boletoActionButtonIsClicked: EventEmitter<void>

  private getExpirationDateFormatted = () => formatDate(new Date())

  render() {
    return (
      <Host class={{ 'checkout-modal-boleto__container': true }}>
        <header class={{ 'checkout-modal-boleto__header': true }}>
          <checkout-icon icon="checkLarge" />
          <checkout-typography
            tag="h3"
            variation="header5"
            color="white"
            content="Pedido recebido com sucesso!"
          />
        </header>
        <section class={{ 'checkout-modal-boleto__content': true }}>
          <checkout-typography
            tag="h4"
            variation="header6"
            content="Seu boleto está disponível para pagamento!"
          />
          <div class={{ 'checkout-modal-boleto__bar-code-informations': true }}>
            <checkout-typography
              tag="p"
              variation="field"
              content={this.boletoCode}
            />
            <img src={this.boletoImageUrl} alt="Código de Barras" />
            <checkout-clipboard-button
              label="Escaneie ou clique para copiar o código para pagar no aplicativo do seu banco."
              clipboardContent={this.boletoCode}
            />
          </div>
          <div
            class={{
              'checkout-modal-boleto__payment-informations': true,
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
              'checkout-modal-boleto__informations': true,
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
                Esse processo pode levar até 48h e é automático.
              </li>
              <li>
                Caso o boleto não seja pago até{' '}
                {this.getExpirationDateFormatted()}, o pedido será cancelado
                automaticamente. Não pague após esta data.
              </li>
            </ul>
          </div>
          <div
            class={{
              'checkout-modal-boleto__action-button': true,
            }}
          >
            <checkout-button
              label={this.actionButtonLabel}
              onClicked={() => this.boletoActionButtonIsClicked.emit()}
            />
          </div>
        </section>
      </Host>
    )
  }
}
