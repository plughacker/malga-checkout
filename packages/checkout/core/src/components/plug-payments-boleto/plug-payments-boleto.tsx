import { Component, Host, h } from '@stencil/core'

import settings from '../../stores/settings'
import dialog from '../../stores/dialog'
@Component({
  tag: 'plug-payments-boleto',
  styleUrl: 'plug-payments-boleto.scss',
})
export class PlugPaymentsBoleto {
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
      <Host>
        <checkout-manual-payment
          fullWidth
          locale={settings.locale}
          paymentMethod="boleto"
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
            paymentCode={dialog.configs.paymentCode}
            paymentImageUrl={dialog.configs.paymentImageUrl}
            expirationDate={dialog.configs.expirationDate}
            errorDescription={dialog.configs.errorMessage}
            actionButtonLabel={settings.dialogConfig.actionButtonLabel}
            boletoWaitingPaymentMessage={
              settings.dialogConfig.boletoWaitingPaymentMessage
            }
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
