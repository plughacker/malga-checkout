import { Component, Host, h, State } from '@stencil/core'

import { PlugCheckoutFormValues } from './plug-checkout.types'

@Component({
  tag: 'plug-checkout',
  styleUrl: 'plug-checkout.scss',
})
export class PlugCheckout {
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
