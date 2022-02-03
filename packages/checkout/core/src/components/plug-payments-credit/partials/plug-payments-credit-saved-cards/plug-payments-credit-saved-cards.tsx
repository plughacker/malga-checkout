import { Component, Host, h } from '@stencil/core'

import { getCardBrand } from '@plug-checkout/utils'

import payment from '../../../../stores/payment'
import savedCards from '../../../../stores/saved-cards'

import { PlugPaymentsCreditSavedCardsService } from './plug-payments-credit-saved-cards.service'

@Component({
  tag: 'plug-payments-credit-saved-cards',
  styleUrl: 'plug-payments-credit-saved-cards.scss',
})
export class PlugPaymentsCreditSavedCards {
  private handleSelectCard = (value: string) => {
    payment.selectedPaymentMethod = value
  }

  private handleCvvChange = (event) => {
    payment.cvv = event.target.value
  }

  private fetchSavedCards = () => {
    const savedCardsService = new PlugPaymentsCreditSavedCardsService()
    savedCardsService.listSavedCards()
  }

  componentWillLoad() {
    this.fetchSavedCards()
  }

  private renderSavedCards() {
    const mappedCards = savedCards.cards
      .filter((card) => card.status !== 'failed')
      .map((card, index) => {
        const value = `credit-${index}`
        const isChecked = payment.selectedPaymentMethod === value
        const validation =
          payment.cvv.trim().length && payment.cvv.trim().length < 3

        return (
          <div class={{ 'plug-payments-credit-saved-cards__card': true }}>
            <checkout-radio-field
              fullWidth
              label={`Cartão de crédito •••• ${card.last4digits}`}
              value={value}
              endIcon={getCardBrand(card.first6digits)}
              isChecked={isChecked}
              onClicked={() => this.handleSelectCard(value)}
            />
            {isChecked && (
              <div
                class={{ 'plug-payments-credit-saved-cards__content': true }}
              >
                <checkout-typography
                  variation="field"
                  color="dark"
                  content="Para efetuar sua transação de forma segura, informe o CVV presente no verso do seu cartão."
                />
                <div
                  class={{
                    'plug-payments-credit-saved-cards__cvv-container': true,
                  }}
                >
                  <checkout-text-field
                    value={payment.cvv}
                    onChanged={this.handleCvvChange}
                    inputmode="numeric"
                    hasValidation={validation}
                    hasError={validation}
                    name="cvv"
                    label="Código de segurança (CVV) *"
                    mask="9999"
                  />
                  {!!validation && (
                    <checkout-error-message message="Formato inválido, verifique os dados do cartão." />
                  )}
                </div>
              </div>
            )}
          </div>
        )
      })

    return mappedCards
  }

  render() {
    return (
      <Host class={{ 'plug-payments-credit-saved-cards__container': true }}>
        {this.renderSavedCards()}
      </Host>
    )
  }
}
