import { Component, Host, h } from '@stencil/core'

import settings from '../../stores/settings'
import dialog from '../../stores/dialog'

@Component({
  tag: 'malga-payments-drip',
  styleUrl: 'malga-payments-drip.scss',
})
export class MalgaPaymentsDrip {
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
      <Host class={{ 'malga-payments-drip__container': true }}>
        <malga-payments-drip-content
          cashback="R$0,40"
          installments={[
            {
              dueDate: '2023-07-31',
              amount: 'R$6,67',
            },
            {
              dueDate: '2023-08-29',
              amount: 'R$6,67',
            },
            {
              dueDate: '2023-09-29',
              amount: 'R$6,66',
            },
          ]}
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
