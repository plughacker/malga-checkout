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
  @Prop() showDialog = true

  @Event() paymentSuccess!: EventEmitter<{
    data: PlugPaymentsPixChargeSuccess
  }>
  @Event() paymentFailed!: EventEmitter<{
    error: PlugPaymentsPixChargeError
  }>

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

  private handleShowDialog = (dialogData: PlugPaymentsPixDialogState) => {
    this.dialog = { ...this.dialog, ...dialogData }
  }

  private handleFormSubmit = async () => {
    this.isLoading = true

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
      showDialog: this.showDialog,
      data,
      onPaymentSuccess: (data: PlugPaymentsPixChargeSuccess) =>
        this.paymentSuccess.emit({ data }),
      onPaymentFailed: (error: PlugPaymentsPixChargeError) =>
        this.paymentFailed.emit({ error }),
      onShowDialog: (dialogData: PlugPaymentsPixDialogState) =>
        this.handleShowDialog(dialogData),
    })

    await pixService.pay()

    this.isLoading = false
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
        {this.showDialog && this.dialog.open && (
          <checkout-modal
            mode={this.dialog.mode}
            open={this.dialog.open}
            amount={this.dialog.amount}
            paymentCode={this.dialog.paymentCode}
            paymentImageUrl={this.dialog.paymentImageUrl}
            expirationDate={this.dialog.expirationDate}
            expirationTime={this.dialog.expirationTime}
            errorDescription={this.dialog.errorMessage}
          />
        )}
      </Host>
    )
  }
}
