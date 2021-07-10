import { Component, Host, h, State, Prop } from '@stencil/core'
import { defaultCustomStyles } from './plug-checkout.utils'

import {
  PlugCheckoutFormCustomStyleFormClasses,
  PlugCheckoutFormValues,
  PlugCheckoutInstallmentsConfig,
} from './plug-checkout.types'
import { checkoutOneShotRequest } from './plug-checkout.service'

@Component({
  tag: 'plug-checkout',
})
export class PlugCheckout {
  @Prop() clientId: string
  @Prop() apiKey: string
  @Prop() merchantId: string
  @Prop() statementDescriptor: string
  @Prop() amount: number
  @Prop() capture = false
  @Prop() installmentsConfig: PlugCheckoutInstallmentsConfig = {
    show: true,
    quantity: 1,
  }
  @Prop() customFormStyleClasses?: PlugCheckoutFormCustomStyleFormClasses =
    defaultCustomStyles

  @State() isLoading = false
  @State() currentFieldChanged = 'cardNumber'
  @State() formValues: PlugCheckoutFormValues = {
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

    try {
      const data = {
        card: this.formValues,
        merchantId: this.merchantId,
        amount: this.amount,
        statementDescriptor: this.statementDescriptor,
        capture: this.capture,
      }

      const responseCheckout = await checkoutOneShotRequest(
        this.apiKey,
        this.clientId,
        data,
      )
      console.log(responseCheckout)
    } catch (error) {
      console.log(error)
    }

    this.isLoading = false
  }

  render() {
    return (
      <Host>
        <checkout-credit-card
          focused={this.currentFieldChanged}
          cvv={this.formValues.cvv}
          expiry={this.formValues.expirationDate}
          name={this.formValues.name}
          number={this.formValues.cardNumber}
        />
        <plug-checkout-form
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
