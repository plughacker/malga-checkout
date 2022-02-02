import { Component, Host, h, State, Event, EventEmitter } from '@stencil/core'

import credit from '../../stores/credit'
import settings from '../../stores/settings'

import {
  PlugPaymentsCreditChargeError,
  PlugPaymentsCreditChargeSuccess,
  PlugPaymentsCreditDialogState,
} from './plug-payments-credit.types'
import { PlugPaymentsCreditService } from './plug-payments-credit.service'

@Component({
  tag: 'plug-payments-credit',
})
export class PlugPaymentsCredit {
  @Event() creditPaymentSuccess!: EventEmitter<{
    data: PlugPaymentsCreditChargeSuccess
  }>
  @Event() creditPaymentFailed!: EventEmitter<{
    error: PlugPaymentsCreditChargeError
  }>

  @State() currentFieldFocused = 'cardNumber'

  @State() dialog: PlugPaymentsCreditDialogState = {
    open: false,
    mode: 'success',
    amount: 0,
  }

  private handleShowDialog = (dialogData: PlugPaymentsCreditDialogState) => {
    this.dialog = { ...this.dialog, ...dialogData }
  }

  private handleSetFocusedField = (field: string) => {
    this.currentFieldFocused = field
  }

  private handleFormSubmit = async () => {
    const data = {
      card: credit.form,
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

    const creditService = new PlugPaymentsCreditService({
      publicKey: settings.publicKey,
      clientId: settings.clientId,
      sandbox: settings.sandbox,
      showDialog: settings.dialogConfig.show,
      data,
      onPaymentSuccess: (data: PlugPaymentsCreditChargeSuccess) =>
        this.creditPaymentSuccess.emit({ data }),
      onPaymentFailed: (error: PlugPaymentsCreditChargeError) =>
        this.creditPaymentFailed.emit({ error }),
      onShowDialog: (dialogData: PlugPaymentsCreditDialogState) =>
        this.handleShowDialog(dialogData),
    })

    await creditService.pay()
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
        {settings.paymentMethods.credit.showCreditCard && (
          <checkout-credit-card
            focused={this.currentFieldFocused}
            cvv={credit.form.cvv}
            expiry={credit.form.expirationDate}
            name={credit.form.name}
            number={credit.form.cardNumber}
          />
        )}
        <plug-payments-credit-form
          onCurrentFieldChange={({ detail: { field } }) =>
            this.handleSetFocusedField(field)
          }
        />
        {settings.dialogConfig.show && this.dialog.open && (
          <checkout-modal
            mode={this.dialog.mode}
            open={this.dialog.open}
            amount={this.dialog.amount}
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
