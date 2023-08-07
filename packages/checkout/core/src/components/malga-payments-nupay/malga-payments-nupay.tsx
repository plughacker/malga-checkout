import { Component, Host, h } from '@stencil/core'

import settings from '../../stores/settings'
import dialog from '../../stores/dialog'
import payment from '../../stores/payment'

@Component({
  tag: 'malga-payments-nupay',
  styleUrl: 'malga-payments-nupay.scss',
})
export class MalgaPaymentsNuPay {
  private handleShowDialog = (dialogData) => {
    dialog.configs = { ...dialog.configs, ...dialogData }
  }

  private handleErrorModalButtonClicked = () => {
    this.handleShowDialog({ open: false })
  }

  render() {
    return (
      <Host class={{ 'malga-payments-nupay__container': true }}>
        <malga-payments-nupay-content />
        {!!payment.paymentUrl && <malga-payments-nupay-iframe />}
        {settings.dialogConfig.show && dialog.configs.open && (
          <checkout-modal
            locale={settings.locale}
            isSession={!!settings.sessionId}
            mode={dialog.configs.mode}
            open={dialog.configs.open}
            amount={dialog.configs.amount}
            errorDescription={dialog.configs.errorMessage}
            errorActionButtonLabel={
              settings.dialogConfig.errorActionButtonLabel
            }
            onErrorButtonClicked={this.handleErrorModalButtonClicked}
          />
        )}
      </Host>
    )
  }
}
