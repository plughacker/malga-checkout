import {
  Component,
  Host,
  h,
  Prop,
  State,
  Fragment,
  Event,
  EventEmitter,
} from '@stencil/core'

import { formatToReal } from '@plug-checkout/utils'

@Component({
  tag: 'checkout-modal-pix',
  styleUrl: 'checkout-modal-pix.scss',
})
export class CheckoutModalPix {
  @Prop() qrCodeIdentificator: string
  @Prop() qrCodeImageUrl: string
  @Prop() amount: number
  @Prop() expirationTime: number
  @Prop() actionButtonLabel = 'Continuar'
  @Prop() countdownFilledProgressBarColor?: string
  @Prop() countdownEmptyProgressBarColor?: string
  @Prop() importantMessages = [
    `Vamos avisar por e-mail quando o banco identificar o depósito.
  Esse processo é automático.`,
    `Caso o tempo de pagamento tenha expirado e o Pix não tenha sido pago, seu pedido será cancelado automaticamente. Não pague após este horário.`,
  ]
  @Prop() waitingPaymentMessage = 'Pedido aguardando pagamento!'

  @State() clipboardIsClicked = false

  @Event() countdownIsFinished: EventEmitter<void>
  @Event() pixActionButtonIsClicked: EventEmitter<void>

  private handleClickClipboard = () => {
    if (!this.clipboardIsClicked) {
      this.clipboardIsClicked = true
    }
  }

  private handleClipboardButtonLabel = () => {
    if (this.clipboardIsClicked) {
      return 'Código Copiado'
    }

    return 'Copiar Código'
  }

  private renderListImportantMessages = () => {
    const mappedImportantMessage = this.importantMessages.map(
      (importantMessage) => <li>{importantMessage}</li>,
    )

    return mappedImportantMessage
  }

  render() {
    return (
      <Host class={{ 'checkout-modal-pix__container': true }}>
        <header class={{ 'checkout-modal-pix__header': true }}>
          <checkout-icon icon="checkLarge" />
          <checkout-typography
            tag="h3"
            variation="header5"
            color="white"
            content={this.waitingPaymentMessage}
          />
        </header>
        <section class={{ 'checkout-modal-pix__content': true }}>
          <span
            class={{ 'checkout-modal-pix__content--header-detail': true }}
          />
          <checkout-typography
            tag="h4"
            variation="header6"
            content="PIX disponível para pagamento!"
          />
          <checkout-typography
            tag="h5"
            variation="field"
            content="Faça o pagamento do PIX abaixo para finalizar o seu pedido:"
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
          <div class={{ 'checkout-modal-pix__clipboard-button-mobile': true }}>
            <checkout-button
              label={this.handleClipboardButtonLabel()}
              clipboardContent={this.qrCodeIdentificator}
              onClicked={() => this.handleClickClipboard()}
            />
          </div>
          <div
            class={{
              'checkout-modal-pix__payment-informations': true,
              'checkout-modal-pix__payment-informations--countdown':
                !!this.expirationTime,
            }}
          >
            {this.expirationTime && (
              <Fragment>
                <div>
                  <p>
                    Seu código
                    <strong> expira em:</strong>
                  </p>
                  <checkout-countdown
                    filledProgressBarColor={
                      this.countdownFilledProgressBarColor
                    }
                    emptyProgressBarColor={this.countdownEmptyProgressBarColor}
                    expirationTime={this.expirationTime}
                    onCountdownFinished={() => this.countdownIsFinished.emit()}
                  />
                </div>

                <p>
                  <strong>Valor a pagar: </strong>
                  {formatToReal(this.amount)}
                </p>
              </Fragment>
            )}
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
              content="Para fazer o pagamento"
            />

            <ol>
              <li>
                Abra o aplicativo do seu banco e selecione o ambiente do PIX.
              </li>
              <li>Escolha a opção pagar com código e cole o código acima.</li>
              <li>Confirme as informações e finalize a sua compra.</li>
            </ol>
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
              content="Informações importantes"
            />

            <ul>{this.renderListImportantMessages()}</ul>
          </div>
          <div
            class={{
              'checkout-modal-pix__action-button': true,
            }}
          >
            <checkout-button
              label={this.actionButtonLabel}
              onClicked={() => this.pixActionButtonIsClicked.emit()}
            />
          </div>
        </section>
      </Host>
    )
  }
}
