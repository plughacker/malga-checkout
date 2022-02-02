import { Component, Host, h, Event, State, EventEmitter } from '@stencil/core'

import settings from '../../stores/settings'

import {
  PlugPaymentsPixChargeSuccess,
  PlugPaymentsPixChargeError,
  PlugPaymentsPixDialogState,
} from './plug-payments-pix.types'

import { PlugPaymentsPixService } from './plug-payments-pix.service'
@Component({
  tag: 'plug-payments-pix',
  styleUrl: 'plug-payments-pix.scss',
})
export class PlugPaymentsPix {
  @Event() pixPaymentSuccess!: EventEmitter<{
    data: PlugPaymentsPixChargeSuccess
  }>
  @Event() pixPaymentFailed!: EventEmitter<{
    error: PlugPaymentsPixChargeError
  }>

  @State() chargeId: string
  @State() isLoading = false
  @State() dialog: PlugPaymentsPixDialogState = {
    open: false,
    mode: 'pix',
    amount: 0,
    paymentCode: '',
    paymentImageUrl: '',
    expirationDate: '',
    expirationTime: 3600,
  }

  private handleSaveChargeId = (chargeId: string) => {
    this.chargeId = chargeId
  }

  private handleShowDialog = (dialogData: PlugPaymentsPixDialogState) => {
    this.dialog = { ...this.dialog, ...dialogData }
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
      onSaveChargeId: (chargeId: string) => this.handleSaveChargeId(chargeId),
      onPaymentSuccess: (data: PlugPaymentsPixChargeSuccess) =>
        this.pixPaymentSuccess.emit({ data }),
      onPaymentFailed: (error: PlugPaymentsPixChargeError) =>
        this.pixPaymentFailed.emit({ error }),
      onShowDialog: (dialogData: PlugPaymentsPixDialogState) =>
        this.handleShowDialog(dialogData),
    })

    return pixService
  }

  private handleFormSubmit = async () => {
    this.isLoading = true

    const pixService = this.getPixService()

    await pixService.pay()

    this.isLoading = false
  }

  private checkIfPixIsPaid = async () => {
    const pixService = this.getPixService()

    await pixService.findCharge(this.chargeId)
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
          paymentMethod="pix"
          isLoading={this.isLoading}
          onPaymentClick={() => this.handleFormSubmit()}
        />
        {settings.dialogConfig.show && this.dialog.open && (
          <checkout-modal
            mode={this.dialog.mode}
            open={this.dialog.open}
            amount={this.dialog.amount}
            paymentCode={this.dialog.paymentCode}
            paymentImageUrl={this.dialog.paymentImageUrl}
            expirationDate={this.dialog.expirationDate}
            expirationTime={this.dialog.expirationTime}
            errorTitle={this.dialog.errorTitle}
            errorDescription={this.dialog.errorMessage}
            successDescription={this.dialog.successMessage}
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
