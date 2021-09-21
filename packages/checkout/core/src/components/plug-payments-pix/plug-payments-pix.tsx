import {
  Component,
  Host,
  h,
  Prop,
  Event,
  State,
  EventEmitter,
} from '@stencil/core'
import { IPix } from '../../providers/Pix'
import {
  PlugPaymentsPixChargeSuccess,
  PlugPaymentsPixChargeError,
} from './plug-payments-pix.types'

import { chargeRequest } from './plug-payments-pix.service'
import { ICustomer } from '../../providers/BaseProvider'

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
  @Prop() pix: IPix
  @Prop() customer?: ICustomer
  @Prop() description?: string
  @Prop() orderId?: string
  @Prop() customerId?: string
  @Prop() currency = 'BRL'
  @Prop() sandbox = false
  @Prop() capture = false

  @Event() paymentSuccess!: EventEmitter<{
    data: PlugPaymentsPixChargeSuccess
  }>
  @Event() paymentFailed!: EventEmitter<{
    error: PlugPaymentsPixChargeError
  }>

  @State() isLoading = false

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

    await chargeRequest({
      publicKey: this.publicKey,
      clientId: this.clientId,
      sandbox: this.sandbox,
      onPaymentSuccess: (data: PlugPaymentsPixChargeSuccess) =>
        this.paymentSuccess.emit({ data }),
      onPaymentFailed: (error: PlugPaymentsPixChargeError) =>
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
          paymentMethod="pix"
          onPaymentClick={() => this.handleFormSubmit()}
        />
      </Host>
    )
  }
}
