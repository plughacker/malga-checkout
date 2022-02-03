import { Component, Host, h } from '@stencil/core'

import settings from '../../stores/settings'
import payment from '../../stores/payment'
import dialog from '../../stores/dialog'

import { PlugPaymentsPixService } from './plug-payments-pix.service'
@Component({
  tag: 'plug-payments-pix',
  styleUrl: 'plug-payments-pix.scss',
})
export class PlugPaymentsPix {
  private handleShowDialog = (dialogData) => {
    dialog.configs = { ...dialog.configs, ...dialogData }
  }

  private getPixService = () => {
    const data = {
      pix: settings.paymentMethods.pix,
      merchantId: settings.merchantId,
      amount: settings.transactionConfig.amount,
      statementDescriptor: settings.transactionConfig.statementDescriptor,
      capture: settings.transactionConfig.capture,
      orderId: settings.transactionConfig.orderId,
      customer: settings.transactionConfig.customer,
      customerId: settings.transactionConfig.customerId,
      description: settings.transactionConfig.description,
      currency: settings.transactionConfig.currency,
    }

    const pixService = new PlugPaymentsPixService({
      publicKey: settings.publicKey,
      clientId: settings.clientId,
      sandbox: settings.sandbox,
      showDialog: settings.dialogConfig.show,
      data,
      onPaymentSuccess: () => null,
      onPaymentFailed: () => null,
      onShowDialog: this.handleShowDialog,
    })

    return pixService
  }

  private checkIfPixIsPaid = async () => {
    const pixService = this.getPixService()

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
