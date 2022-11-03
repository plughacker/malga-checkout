import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core'
import { formatDate, formatCurrency, parseDate } from '@plug-checkout/utils'

@Component({
  tag: 'checkout-modal-boleto',
  styleUrl: 'checkout-modal-boleto.scss',
})
export class CheckoutModalBoleto {
  @Prop() boletoCode: string
  @Prop() boletoImageUrl: string
  @Prop() amount: number
  @Prop() currency: string
  @Prop() expirationDate: string
  @Prop() actionButtonLabel = 'Continuar'
  @Prop() waitingPaymentMessage = 'Pedido aguardando pagamento!'
  @Prop() hasSuccessRedirectUrl?: boolean
  @Prop() isSession?: boolean

  @Event() boletoActionButtonIsClicked: EventEmitter<void>

  private getExpirationDateFormatted = () => {
    const [year, month, day] = parseDate(this.expirationDate)
    const currentDate = new Date(year, month, day)
    const formattedDate = formatDate(currentDate)

    return formattedDate
  }

  render() {
    return (
      <Host class={{ 'checkout-modal-boleto__container': true }}>
        <header class={{ 'checkout-modal-boleto__header': true }}>
          <checkout-icon icon="checkLarge" />
          <checkout-typography
            tag="h3"
            variation="header5"
            color="white"
            content={this.waitingPaymentMessage}
          />
        </header>
        <section class={{ 'checkout-modal-boleto__content': true }}>
          <span
            class={{ 'checkout-modal-boleto__content--header-detail': true }}
          />
          <checkout-typography
            tag="h4"
            variation="header6"
            content="Boleto disponível para pagamento!"
          />
          <checkout-typography
            tag="h5"
            variation="field"
            content="Faça o pagamento do Boleto abaixo para finalizar o seu pedido:"
          />
          <div class={{ 'checkout-modal-boleto__bar-code-informations': true }}>
            <checkout-typography
              tag="p"
              variation="field"
              content={this.boletoCode}
            />
            <checkout-clipboard-button
              label="Escaneie ou clique para copiar o código para pagar no aplicativo do seu banco."
              clipboardContent={this.boletoCode}
            />
          </div>
          <div
            class={{ 'checkout-modal-boleto__clipboard-button-mobile': true }}
          >
            <checkout-button
              label="Copiar Código"
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
              {formatCurrency(this.amount, this.currency)}
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
              {!this.isSession && (
                <li>
                  Vamos avisar por e-mail quando o banco identificar o depósito.
                  Esse processo pode levar até 48h e é automático.
                </li>
              )}

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
            <a href={this.boletoImageUrl} target="_blank">
              <checkout-typography
                tag="span"
                color="white"
                variation="button"
                content="Exibir Boleto"
              />
              <checkout-icon icon="newTab" />
            </a>

            {!!this.hasSuccessRedirectUrl && (
              <checkout-button
                label={this.actionButtonLabel}
                onClicked={() => this.boletoActionButtonIsClicked.emit()}
              />
            )}
          </div>
        </section>
      </Host>
    )
  }
}
