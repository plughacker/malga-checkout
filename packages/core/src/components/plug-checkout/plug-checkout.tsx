import { Component, Host, h, State, Prop } from '@stencil/core'
import { defaultCustomStyles } from './plug-checkout.utils'

import {
  PlugCheckoutFormCustomStyleFormClasses,
  PlugCheckoutFormValues,
  PlugCheckoutInstallmentsConfig,
} from './plug-checkout.types'

@Component({
  tag: 'plug-checkout',
  styleUrl: 'plug-checkout.scss',
})
export class PlugCheckout {
  @Prop() amount: number
  @Prop() installmentsConfig: PlugCheckoutInstallmentsConfig = {
    show: true,
    quantity: 0,
  }
  @Prop() customFormStyleClasses?: PlugCheckoutFormCustomStyleFormClasses =
    defaultCustomStyles

  @State() formValues: PlugCheckoutFormValues = {
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    name: '',
    installments: 'none',
  }
  @State() currentFieldChanged = 'cardNumber'

  private handleSetFormValues = (field: string, value: string) => {
    this.formValues = { ...this.formValues, [field]: value }
    this.currentFieldChanged = field
  }

  private handleFormSubmit = () => {
    console.log(this.formValues)
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
          customFormStyleClasses={{
            ...defaultCustomStyles,
            ...this.customFormStyleClasses,
          }}
          amount={this.amount}
          installmentsConfig={this.installmentsConfig}
          formValues={this.formValues}
          onFieldChange={({ detail }) => {
            this.handleSetFormValues(detail.field, detail.value)
          }}
          onFormSubmit={() => this.handleFormSubmit()}
        />
      </Host>
    )
  }
}
