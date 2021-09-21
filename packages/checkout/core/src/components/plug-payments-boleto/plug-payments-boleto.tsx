import {
  Component,
  Host,
  h,
  Prop,
  State,
  Event,
  EventEmitter,
} from '@stencil/core'
import { IBoleto } from '../../providers/Boleto'
import {
  PlugPaymentsBoletoChargeSuccess,
  PlugPaymentsBoletoChargeError,
} from './plug-payments-boleto.types'

import { chargeRequest } from './plug-payments-boleto.service'
import { ICustomer } from '../../providers/BaseProvider'

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
  @Prop() boleto: IBoleto
  @Prop() customer?: ICustomer
  @Prop() description?: string
  @Prop() orderId?: string
  @Prop() customerId?: string
  @Prop() currency = 'BRL'
  @Prop() sandbox = false
  @Prop() capture = false

  @Event() paymentSuccess!: EventEmitter<{
    data: PlugPaymentsBoletoChargeSuccess
  }>
  @Event() paymentFailed!: EventEmitter<{
    error: PlugPaymentsBoletoChargeError
  }>

  @State() isLoading = false

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

    await chargeRequest({
      publicKey: this.publicKey,
      clientId: this.clientId,
      sandbox: this.sandbox,
      onPaymentSuccess: (data: PlugPaymentsBoletoChargeSuccess) =>
        this.paymentSuccess.emit({ data }),
      onPaymentFailed: (error: PlugPaymentsBoletoChargeError) =>
        this.paymentFailed.emit({ error }),
      data,
    })

    this.isLoading = false
  }

  render() {
    return (
      <Host>
        <checkout-manual-payment
          fullWidth
          paymentMethod="boleto"
          onPaymentClick={() => this.handleFormSubmit()}
        />
      </Host>
    )
  }
}
