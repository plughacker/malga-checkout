import { Component, Host, h } from '@stencil/core'

import { getCardBrand } from '@plug-checkout/utils'

import payment from '../../../../stores/payment'

const MOCK = [
  {
    id: '8724d845-efbf-409e-82d4-047415890be3',
    status: 'pending',
    createdAt: '2022-02-02T13:20:03.515Z',
    clientId: '8edc08eb-0264-4c10-ba88-0d04ab40804a',
    customerId: '52a2c1a3-bbeb-4c24-a6c2-700e6d1a3fcc',
    brand: 'Mastercard',
    cvvChecked: false,
    fingerprint: 'J6PFje2wyqqoc54D5JCSjW+yaaIaHmBmx04+fTFMtcM=',
    first6digits: '547972',
    last4digits: '3180',
    expirationMonth: '03',
    expirationYear: '2023',
  },
  {
    id: '6a4b5cc1-11fb-4179-8454-1871ae71b307',
    status: 'pending',
    createdAt: '2022-02-02T13:21:12.026Z',
    clientId: '8edc08eb-0264-4c10-ba88-0d04ab40804a',
    customerId: '52a2c1a3-bbeb-4c24-a6c2-700e6d1a3fcc',
    brand: 'Mastercard',
    cvvChecked: false,
    fingerprint: 'J6PFje2wyqqoc54D5JCSjW+yaaIaHmBmx04+fTFMtcM=',
    first6digits: '547972',
    last4digits: '3180',
    expirationMonth: '03',
    expirationYear: '2023',
  },
]

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

  private renderSavedCards() {
    const mappedCards = MOCK.filter((card) => card.status !== 'failed').map(
      (card, index) => {
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
      },
    )

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
