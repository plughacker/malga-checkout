import {
  Component,
  Host,
  h,
  Prop,
  Event,
  State,
  EventEmitter,
} from '@stencil/core'
import { PixAttributes } from '../../providers/pix'
import {
  PlugPaymentsPixChargeSuccess,
  PlugPaymentsPixChargeError,
  PlugPaymentsPixDialogState,
} from './plug-payments-pix.types'
import { PlugCheckoutDialog } from '../plug-checkout/plug-checkout.types'

import { PlugPaymentsPixService } from './plug-payments-pix.service'
import { Customer } from '../../providers/base-provider'

@Component({
  tag: 'plug-payments-pix',
  styleUrl: 'plug-payments-pix.scss',
})
export class PlugPaymentsPix {
  @Prop() clientId: string
  @Prop() publicKey: string
  @Prop() merchantId: string
  @Prop() statementDescriptor: string
  @Prop() amount: number
  @Prop() pix: PixAttributes
  @Prop() customer?: Customer
  @Prop() description?: string
  @Prop() orderId?: string
  @Prop() customerId?: string
  @Prop() currency = 'BRL'
  @Prop() sandbox = false
  @Prop() capture = false
  @Prop() dialogConfig: PlugCheckoutDialog

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
      pix: this.pix,
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

    const pixService = new PlugPaymentsPixService({
      publicKey: this.publicKey,
      clientId: this.clientId,
      sandbox: this.sandbox,
      showDialog: this.dialogConfig.show,
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

  render() {
    return (
      <Host>
        <checkout-manual-payment
          fullWidth
          paymentMethod="pix"
          isLoading={this.isLoading}
          onPaymentClick={() => this.handleFormSubmit()}
        />
        {this.dialogConfig.show && this.dialog.open && (
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
            actionButtonLabel={this.dialogConfig.actionButtonLabel}
            successActionButtonLabel={
              this.dialogConfig.successActionButtonLabel
            }
            errorActionButtonLabel={this.dialogConfig.errorActionButtonLabel}
            onPixCountdownIsFinished={this.checkIfPixIsPaid}
          />
        )}
      </Host>
    )
  }
}
