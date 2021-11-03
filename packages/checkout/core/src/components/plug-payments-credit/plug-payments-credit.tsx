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

  @State() isLoading = false
  @State() currentFieldChanged = 'cardNumber'
  @State() formValues: PlugPaymentsCreditFormValues = {
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    name: '',
    installments: 'none',
  }
  @State() dialog: PlugPaymentsCreditDialogState = {
    open: false,
    mode: 'success',
    amount: 0,
  }

  private handleShowDialog = (dialogData: PlugPaymentsCreditDialogState) => {
    this.dialog = { ...this.dialog, ...dialogData }
  }

  private handleSetFormValues = (field: string, value: string) => {
    this.formValues = { ...this.formValues, [field]: value }
    this.currentFieldChanged = field
  }

  private handleFormSubmit = async () => {
    this.isLoading = true

    const data = {
      card: this.formValues,
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

    this.isLoading = false
  }

  private handleErrorModalButtonClicked = () => {
    this.handleShowDialog({ open: false })
  }

  private handleSuccessModalButtonClicked = () => {
    location.assign(this.dialogConfig.successRedirectUrl)
  }

  render() {
    return (
      <Host>
        {this.showCreditCard && (
          <checkout-credit-card
            focused={this.currentFieldChanged}
            cvv={this.formValues.cvv}
            expiry={this.formValues.expirationDate}
            name={this.formValues.name}
            number={this.formValues.cardNumber}
          />
        )}
        <plug-payments-credit-form
          isLoading={this.isLoading}
          amount={this.amount}
          installmentsConfig={this.installmentsConfig}
          formValues={this.formValues}
          onFormSubmit={() => this.handleFormSubmit()}
          onFieldChange={({ detail }) => {
            this.handleSetFormValues(detail.field, detail.value)
          }}
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
