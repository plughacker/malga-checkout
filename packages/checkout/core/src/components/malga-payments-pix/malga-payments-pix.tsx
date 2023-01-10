import { Component, Host, h, Event, EventEmitter } from '@stencil/core'

import settings from '../../stores/settings'
import payment from '../../stores/payment'
import dialog from '../../stores/dialog'

import { MalgaPaymentsPixService } from './malga-payments-pix.service'
import { MalgaPaymentsError } from '../../types/malga-payments-error.types'

@Component({
  tag: 'malga-payments-pix',
  styleUrl: 'malga-payments-pix.scss',
})
export class MalgaPaymentsPix {
  @Event() pixPaymentFailed!: EventEmitter<{
    error: MalgaPaymentsError
  }>

  private handleShowDialog = (dialogData) => {
    dialog.configs = { ...dialog.configs, ...dialogData }
  }

  private checkIfPixIsPaid = async () => {
    if (settings.sessionId) return

    const pixService = new MalgaPaymentsPixService({
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
        <checkout-manual-payment
          fullWidth
          locale={settings.locale}
          paymentMethod="pix"
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
