import {
  Component,
  Host,
  h,
  State,
  Prop,
  Event,
  EventEmitter,
} from '@stencil/core'

import {
  PlugPaymentsCreditFormValues,
  PlugPaymentsCreditInstallmentsConfig,
  PlugPaymentsCreditChargeError,
  PlugPaymentsCreditChargeSuccess,
  PlugPaymentsCreditDialogState,
} from './plug-payments-credit.types'
import { PlugCheckoutDialog } from '../plug-checkout/plug-checkout.types'
import { PlugPaymentsCreditService } from './plug-payments-credit.service'
import { Customer } from '../../providers/base-provider'
import credit from '../../stores/credit'

@Component({
  tag: 'plug-payments-credit',
})
export class PlugPaymentsCredit {
  @Prop() clientId: string
  @Prop() publicKey: string
  @Prop() merchantId: string
  @Prop() statementDescriptor: string
  @Prop() amount: number
  @Prop() description?: string
  @Prop() orderId?: string
  @Prop() customerId?: string
  @Prop() customer?: Customer
  @Prop() currency = 'BRL'
  @Prop() sandbox = false
  @Prop() capture = false
  @Prop() showCreditCard = true
  @Prop() dialogConfig: PlugCheckoutDialog
  @Prop() installmentsConfig: PlugPaymentsCreditInstallmentsConfig = {
    show: true,
    quantity: 1,
  }

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
      merchantId: this.merchantId,
      amount: this.amount,
      statementDescriptor: this.statementDescriptor,
      capture: this.capture,
      orderId: this.orderId,
      customer: this.customer,
      customerId: this.customerId,
      description: this.description,
      currency: this.currency,
    }

    const creditService = new PlugPaymentsCreditService({
      publicKey: this.publicKey,
      clientId: this.clientId,
      sandbox: this.sandbox,
      showDialog: this.dialogConfig.show,
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
    if (this.dialogConfig.successRedirectUrl) {
      location.assign(this.dialogConfig.successRedirectUrl)
    }

    this.handleShowDialog({ open: false })
  }

  render() {
    return (
      <Host>
        {this.showCreditCard && (
          <checkout-credit-card
            focused={this.currentFieldFocused}
            cvv={credit.form.cvv}
            expiry={credit.form.expirationDate}
            name={credit.form.name}
            number={credit.form.cardNumber}
          />
        )}
        <plug-payments-credit-form
          amount={this.amount}
          installmentsConfig={this.installmentsConfig}
          onCurrentFieldChange={({ detail: { field } }) =>
            this.handleSetFocusedField(field)
          }
        />
        {this.dialogConfig.show && this.dialog.open && (
          <checkout-modal
            mode={this.dialog.mode}
            open={this.dialog.open}
            amount={this.dialog.amount}
            errorDescription={this.dialog.errorMessage}
            actionButtonLabel={this.dialogConfig.actionButtonLabel}
            successActionButtonLabel={
              this.dialogConfig.successActionButtonLabel
            }
            errorActionButtonLabel={this.dialogConfig.errorActionButtonLabel}
            onSuccessButtonClicked={this.handleSuccessModalButtonClicked}
            onErrorButtonClicked={this.handleErrorModalButtonClicked}
          />
        )}
      </Host>
    )
  }
}
