import {
  Component,
  Host,
  h,
  State,
  Prop,
  Event,
  EventEmitter,
} from '@stencil/core'

import { defaultCustomStyles } from './plug-payments-credit.utils'
import {
  PlugPaymentsCreditFormCustomStyleFormClasses,
  PlugPaymentsCreditFormValues,
  PlugPaymentsCreditInstallmentsConfig,
  PlugPaymentsCreditChargeError,
  PlugPaymentsCreditChargeSuccess,
} from './plug-payments-credit.types'
import { chargeRequest } from './plug-payments-credit.service'

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
  @Prop() currency = 'BRL'
  @Prop() sandbox = false
  @Prop() capture = false
  @Prop() showCreditCard = true
  @Prop() installmentsConfig: PlugPaymentsCreditInstallmentsConfig = {
    show: true,
    quantity: 1,
  }
  @Prop()
  customFormStyleClasses?: PlugPaymentsCreditFormCustomStyleFormClasses = defaultCustomStyles

  @Event() paymentSuccess!: EventEmitter<{
    data: PlugPaymentsCreditChargeSuccess
  }>
  @Event() paymentFailed!: EventEmitter<{
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
      customerId: this.customerId,
      description: this.description,
      currency: this.currency,
    }

    await chargeRequest({
      publicKey: this.publicKey,
      clientId: this.clientId,
      sandbox: this.sandbox,
      onPaymentSuccess: (data: PlugPaymentsCreditChargeSuccess) =>
        this.paymentSuccess.emit({ data }),
      onPaymentFailed: (error: PlugPaymentsCreditChargeError) =>
        this.paymentFailed.emit({ error }),
      data,
    })

    this.isLoading = false
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
          customFormStyleClasses={{
            ...defaultCustomStyles,
            ...this.customFormStyleClasses,
          }}
        />
      </Host>
    )
  }
}
