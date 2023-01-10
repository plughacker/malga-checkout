import { Component, Host, h, State } from '@stencil/core'

import credit from '../../stores/credit'
import settings from '../../stores/settings'
import dialog from '../../stores/dialog'

@Component({
  tag: 'malga-payments-credit',
  styleUrl: 'malga-payments-credit.scss',
})
export class MalgaPaymentsCredit {
  @State() currentFieldFocused = 'cardNumber'

  private handleShowDialog = (dialogData) => {
    dialog.configs = { ...dialog.configs, ...dialogData }
  }

  private handleSetFocusedField = (field: string) => {
    this.currentFieldFocused = field
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
      <Host class={{ 'malga-payments-credit__container': true }}>
        {settings.paymentMethods.credit.showCreditCard && (
          <checkout-credit-card
            locale={settings.locale}
            focused={this.currentFieldFocused}
            cvv={credit.form.cvv}
            expiry={credit.form.expirationDate}
            name={credit.form.name}
            number={credit.form.cardNumber}
          />
        )}
        <malga-payments-credit-form
          onCurrentFieldChange={({ detail: { field } }) =>
            this.handleSetFocusedField(field)
          }
        />
        {settings.dialogConfig.show && dialog.configs.open && (
          <checkout-modal
            locale={settings.locale}
            isSession={!!settings.sessionId}
            hasSuccessRedirectUrl={!!settings.dialogConfig.successRedirectUrl}
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
