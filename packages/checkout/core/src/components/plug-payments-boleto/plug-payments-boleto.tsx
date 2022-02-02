import { Component, Host, h, State, Event, EventEmitter } from '@stencil/core'

import settings from '../../stores/settings'

import {
  PlugPaymentsBoletoChargeSuccess,
  PlugPaymentsBoletoChargeError,
  PlugPaymentsBoletoDialogState,
} from './plug-payments-boleto.types'

import { PlugPaymentsBoletoService } from './plug-payments-boleto.service'

@Component({
  tag: 'plug-payments-boleto',
  styleUrl: 'plug-payments-boleto.scss',
})
export class PlugPaymentsBoleto {
  @Event() boletoPaymentSuccess!: EventEmitter<{
    data: PlugPaymentsBoletoChargeSuccess
  }>
  @Event() boletoPaymentFailed!: EventEmitter<{
    error: PlugPaymentsBoletoChargeError
  }>

  @State() isLoading = false
  @State() dialog: PlugPaymentsBoletoDialogState = {
    open: false,
    mode: 'boleto',
    amount: 0,
    paymentCode: '',
    paymentImageUrl: '',
    expirationDate: '',
  }

  private handleShowDialog = (dialogData: PlugPaymentsBoletoDialogState) => {
    this.dialog = { ...this.dialog, ...dialogData }
  }

  private handleFormSubmit = async () => {
    this.isLoading = true

    const data = {
      boleto: settings.paymentMethods.boleto,
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

    const boletoService = new PlugPaymentsBoletoService({
      publicKey: settings.publicKey,
      clientId: settings.clientId,
      sandbox: settings.sandbox,
      showDialog: settings.dialogConfig.show,
      data,
      onPaymentSuccess: (data: PlugPaymentsBoletoChargeSuccess) =>
        this.boletoPaymentSuccess.emit({ data }),
      onPaymentFailed: (error: PlugPaymentsBoletoChargeError) =>
        this.boletoPaymentFailed.emit({ error }),
      onShowDialog: (dialogData: PlugPaymentsBoletoDialogState) =>
        this.handleShowDialog(dialogData),
    })

    await boletoService.pay()

    this.isLoading = false
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
          paymentMethod="boleto"
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
            errorDescription={this.dialog.errorMessage}
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
