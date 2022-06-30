import { Component, Host, h } from '@stencil/core'

import { getCardBrand } from '@plug-checkout/utils'

import payment from '../../../../stores/payment'
import savedCards from '../../../../stores/saved-cards'
import settings from '../../../../stores/settings'
import dialog from '../../../../stores/dialog'

import { PlugPaymentsCreditSavedCardsService } from './plug-payments-credit-saved-cards.service'

@Component({
  tag: 'plug-payments-credit-saved-cards',
  styleUrl: 'plug-payments-credit-saved-cards.scss',
})
export class PlugPaymentsCreditSavedCards {
  private handleSelectCard = (value: string, cardId: string) => {
    payment.selectedPaymentMethod = value
    payment.cardId = cardId
  }

  private handleCvvChange = (event) => {
    payment.cvv = event.target.value.trim()
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
              onClicked={() => this.handleSelectCard(value, card.id)}
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

  private handleShowDialog = (dialogData) => {
    dialog.configs = { ...dialog.configs, ...dialogData }
  }

  private handleErrorModalButtonClicked = () => {
    this.handleShowDialog({ open: false })
  }

  private handleSuccessModalButtonClicked = () => {
    if (settings.dialogConfig.successRedirectUrl) {
      location.assign(settings.dialogConfig.successRedirectUrl)
    }

    this.handleShowDialog({ open: false })
  }

  render() {
    return (
      <Host class={{ 'plug-payments-credit-saved-cards__container': true }}>
        {this.renderSavedCards()}
        {settings.dialogConfig.show && dialog.configs.open && (
          <checkout-modal
            currency={settings.transactionConfig.currency}
            mode={dialog.configs.mode}
            open={dialog.configs.open}
            amount={dialog.configs.amount}
            errorDescription={dialog.configs.errorMessage}
            actionButtonLabel={settings.dialogConfig.actionButtonLabel}
            successActionButtonLabel={
              settings.dialogConfig.successActionButtonLabel
            }
            errorActionButtonLabel={
              settings.dialogConfig.errorActionButtonLabel
            }
            onSuccessButtonClicked={this.handleSuccessModalButtonClicked}
            onErrorButtonClicked={this.handleErrorModalButtonClicked}
          />
        )}
      </Host>
    )
  }
}
