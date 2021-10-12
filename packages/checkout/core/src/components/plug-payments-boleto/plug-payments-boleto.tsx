import {
  Component,
  Host,
  h,
  Prop,
  State,
  Event,
  EventEmitter,
} from '@stencil/core'
import { BoletoAttributes } from '../../providers/boleto'
import {
  PlugPaymentsBoletoChargeSuccess,
  PlugPaymentsBoletoChargeError,
  PlugPaymentsBoletoDialogState,
} from './plug-payments-boleto.types'

import { PlugPaymentsBoletoService } from './plug-payments-boleto.service'
import { Customer } from '../../providers/base-provider'

@Component({
  tag: 'plug-payments-boleto',
  styleUrl: 'plug-payments-boleto.scss',
})
export class PlugPaymentsBoleto {
  @Prop() clientId: string
  @Prop() publicKey: string
  @Prop() merchantId: string
  @Prop() statementDescriptor: string
  @Prop() amount: number
  @Prop() boleto: BoletoAttributes
  @Prop() customer?: Customer
  @Prop() description?: string
  @Prop() orderId?: string
  @Prop() customerId?: string
  @Prop() currency = 'BRL'
  @Prop() sandbox = false
  @Prop() capture = false
  @Prop() showDialog = true

  @Event() paymentSuccess!: EventEmitter<{
    data: PlugPaymentsBoletoChargeSuccess
  }>
  @Event() paymentFailed!: EventEmitter<{
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
      boleto: this.boleto,
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

    const boletoService = new PlugPaymentsBoletoService({
      publicKey: this.publicKey,
      clientId: this.clientId,
      sandbox: this.sandbox,
      showDialog: this.showDialog,
      data,
      onPaymentSuccess: (data: PlugPaymentsBoletoChargeSuccess) =>
        this.paymentSuccess.emit({ data }),
      onPaymentFailed: (error: PlugPaymentsBoletoChargeError) =>
        this.paymentFailed.emit({ error }),
      onShowDialog: (dialogData: PlugPaymentsBoletoDialogState) =>
        this.handleShowDialog(dialogData),
    })

    await boletoService.pay()

    this.isLoading = false
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
        {this.showDialog && this.dialog.open && (
          <checkout-modal
            mode={this.dialog.mode}
            open={this.dialog.open}
            amount={this.dialog.amount}
            paymentCode={this.dialog.paymentCode}
            paymentImageUrl={this.dialog.paymentImageUrl}
            expirationDate={this.dialog.expirationDate}
            errorDescription={this.dialog.errorMessage}
          />
        )}
      </Host>
    )
  }
}
