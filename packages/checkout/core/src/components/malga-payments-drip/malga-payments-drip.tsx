import { Component, Host, h } from '@stencil/core'

import settings from '../../stores/settings'
import dialog from '../../stores/dialog'
import payment from '../../stores/payment'

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

  render() {
    return (
      <Host
        class={{
          'malga-payments-drip__container': true,
          'malga-payments-drip__container--selected':
            payment.selectedPaymentMethod === 'drip',
        }}
      >
        <malga-payments-drip-content />
        {!!payment.paymentUrl && <malga-payments-drip-iframe />}
        {settings.dialogConfig.show && dialog.configs.open && (
          <checkout-modal
            locale={settings.locale}
            isSession={!!settings.sessionId}
            mode={dialog.configs.mode}
            open={dialog.configs.open}
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
