import { Component, Host, h, Event, EventEmitter } from '@stencil/core'

import settings from '../../stores/settings'
import payment from '../../stores/payment'
import dialog from '../../stores/dialog'

import { PlugPaymentsPixService } from './plug-payments-pix.service'
import { PlugPaymentsError } from '../../types/plug-payments-error.types'

@Component({
  tag: 'plug-payments-pix',
  styleUrl: 'plug-payments-pix.scss',
})
export class PlugPaymentsPix {
  @Event() pixPaymentFailed!: EventEmitter<{
    error: PlugPaymentsError
  }>

  private handleShowDialog = (dialogData) => {
    dialog.configs = { ...dialog.configs, ...dialogData }
  }

  private checkIfPixIsPaid = async () => {
    const pixService = new PlugPaymentsPixService({
      data: settings.paymentMethods.pix,
      onShowDialog: this.handleShowDialog,
      onPaymentFailed: (error) => this.pixPaymentFailed.emit({ error }),
    })

    await pixService.findCharge(payment.chargeId)
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
        <checkout-manual-payment fullWidth paymentMethod="pix" />
        {settings.dialogConfig.show && dialog.configs.open && (
          <checkout-modal
            currency={settings.transactionConfig.currency}
            mode={dialog.configs.mode}
            open={dialog.configs.open}
            amount={dialog.configs.amount}
            paymentCode={dialog.configs.paymentCode}
            paymentImageUrl={dialog.configs.paymentImageUrl}
            expirationDate={dialog.configs.expirationDate}
            expirationTime={dialog.configs.expirationTime}
            errorTitle={dialog.configs.errorTitle}
            errorDescription={dialog.configs.errorMessage}
            successDescription={dialog.configs.successMessage}
            actionButtonLabel={settings.dialogConfig.actionButtonLabel}
            pixImportantMessages={settings.dialogConfig.pixImportantMessages}
            pixWaitingPaymentMessage={
              settings.dialogConfig.pixWaitingPaymentMessage
            }
            pixFilledProgressBarColor={
              settings.dialogConfig.pixFilledProgressBarColor
            }
            pixEmptyProgressBarColor={
              settings.dialogConfig.pixEmptyProgressBarColor
            }
            successActionButtonLabel={
              settings.dialogConfig.successActionButtonLabel
            }
            errorActionButtonLabel={
              settings.dialogConfig.errorActionButtonLabel
            }
            onPixCountdownIsFinished={this.checkIfPixIsPaid}
            onSuccessButtonClicked={this.handleSuccessModalButtonClicked}
            onErrorButtonClicked={this.handleErrorModalButtonClicked}
          />
        )}
      </Host>
    )
  }
}
