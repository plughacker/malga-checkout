import {
  Component,
  Host,
  h,
  Prop,
  Event,
  ComponentInterface,
  EventEmitter,
  State,
} from '@stencil/core'

import {
  PlugPaymentsCreditFormValues,
  PlugPaymentsCreditInstallmentsConfig,
} from '../../plug-payments-credit.types'

import { PlugPaymentsCreditFormValidFields } from './plug-payments-credit-form.types'

import {
  centsToReal,
  checkIfAllFieldsIsBlank,
} from './plug-payments-credit-form.utils'
import { validateCheckout } from './plug-payments-credit-form.schema'
import { getCurrentMaskPerIssuer } from '@plug-checkout/utils'

@Component({
  tag: 'plug-payments-credit-form',
  styleUrl: 'plug-payments-credit-form.scss',
})
export class PlugPaymentsCreditForm implements ComponentInterface {
  @Prop() formValues: PlugPaymentsCreditFormValues
  @Prop() amount: number
  @Prop() installmentsConfig: PlugPaymentsCreditInstallmentsConfig
  @Prop() isLoading: boolean

  @Event() formSubmit: EventEmitter<void>
  @Event() fieldChange: EventEmitter<{ field: string; value: string }>

  @State() allFieldIsBlank = false
  @State() validFields: PlugPaymentsCreditFormValidFields = {
    cardNumber: null,
    cvv: null,
    installments: null,
    name: null,
    expirationDate: null,
  }

  private handleSubmitValidation = async () => {
    const validation = await validateCheckout(this.formValues, {
      hasInstallments: this.installmentsConfig.show,
    })

    if (!validation.isValid) {
      this.validFields = { ...this.validFields, ...validation.errors }

      const checkedIfAllFieldsIsBlank = checkIfAllFieldsIsBlank(this.formValues)

      if (checkedIfAllFieldsIsBlank) {
        this.allFieldIsBlank = true
      }
    }

    return validation.isValid
  }

  private handleFieldFocused = (field: string) => () => {
    if (this.allFieldIsBlank) {
      this.allFieldIsBlank = false
    }

    this.validFields = { ...this.validFields, [field]: null }
  }

  private handleFieldBlurred = (field: string) => async (event) => {
    const isMaskedField = ['cvv'].includes(field)
    const normalizedValue = event.target.value.replace(/\D/g, '').trim()

    const validation = await validateCheckout(
      {
        ...this.formValues,
        [field]: isMaskedField ? normalizedValue : event.target.value,
      },
      { hasInstallments: this.installmentsConfig.show },
    )

    this.validFields = {
      ...this.validFields,
      [field]: validation.errors ? validation.errors[field] : '',
    }
  }

  private handleFieldChange = (field: string) => (event) => {
    this.fieldChange.emit({ field, value: event.target.value })
  }

  private handleFormSubmit = async (event) => {
    event.preventDefault()

    const formIsValid = await this.handleSubmitValidation()

    if (formIsValid && !this.isLoading) {
      this.formSubmit.emit()
      return
    }

    return
  }

  private renderInstallmentOptions = () => {
    const installmentOptions = Array.from({
      length: this.installmentsConfig.quantity,
    }).map((_, index) => {
      const currentInstallment = index + 1
      const installmentValue = this.amount / currentInstallment

      return {
        label: `${currentInstallment}x ${centsToReal(
          installmentValue,
        )}, total ${centsToReal(this.amount)}`,
        value: currentInstallment,
      }
    })

    return installmentOptions
  }

  render() {
    return (
      <Host
        class={{
          'plug-payments-credit-form__container': true,
        }}
      >
        <form
          class={{
            'plug-payments-credit-form__form': true,
          }}
          onSubmit={this.handleFormSubmit}
        >
          <checkout-text-field
            value={this.formValues.cardNumber}
            onChanged={this.handleFieldChange('cardNumber')}
            onBlurred={this.handleFieldBlurred('cardNumber')}
            onFocused={this.handleFieldFocused('cardNumber')}
            fullWidth
            inputmode="numeric"
            mask={getCurrentMaskPerIssuer(this.formValues.cardNumber)}
            hasValidation={this.validFields.cardNumber !== null}
            hasError={!!this.validFields.cardNumber}
            name="cardNumber"
            label="Número do cartão *"
          />
          {!this.allFieldIsBlank && !!this.validFields.cardNumber && (
            <checkout-error-message message={this.validFields.cardNumber} />
          )}

          <fieldset class="plug-payments-credit-form__row-fields">
            <checkout-text-field
              value={this.formValues.expirationDate}
              onChanged={this.handleFieldChange('expirationDate')}
              onBlurred={this.handleFieldBlurred('expirationDate')}
              onFocused={this.handleFieldFocused('expirationDate')}
              fullWidth
              inputmode="numeric"
              hasValidation={this.validFields.expirationDate !== null}
              hasError={!!this.validFields.expirationDate}
              name="expirationDate"
              label="Data de expiração (MM/AA) *"
              mask="99/99"
            />

            <checkout-text-field
              value={this.formValues.cvv}
              onChanged={this.handleFieldChange('cvv')}
              onBlurred={this.handleFieldBlurred('cvv')}
              onFocused={this.handleFieldFocused('cvv')}
              fullWidth
              inputmode="numeric"
              hasValidation={this.validFields.cvv !== null}
              hasError={!!this.validFields.cvv}
              name="cvv"
              label="Código de segurança (CVV) *"
              mask="999"
            />
          </fieldset>
          {!this.allFieldIsBlank && !!this.validFields.expirationDate && (
            <checkout-error-message message={this.validFields.expirationDate} />
          )}

          {!this.allFieldIsBlank && !!this.validFields.cvv && (
            <checkout-error-message message={this.validFields.cvv} />
          )}

          <checkout-text-field
            value={this.formValues.name.toUpperCase()}
            onChanged={this.handleFieldChange('name')}
            onBlurred={this.handleFieldBlurred('name')}
            onFocused={this.handleFieldFocused('name')}
            fullWidth
            hasValidation={this.validFields.name !== null}
            hasError={!!this.validFields.name}
            name="name"
            label="Nome no cartão *"
          />
          {!this.allFieldIsBlank && !!this.validFields.name && (
            <checkout-error-message message={this.validFields.name} />
          )}

          {this.installmentsConfig.show && (
            <checkout-select-field
              value={this.formValues.installments}
              onChanged={this.handleFieldChange('installments')}
              onBlurred={this.handleFieldBlurred('installments')}
              onFocused={this.handleFieldFocused('installments')}
              options={this.renderInstallmentOptions()}
              fullWidth
              hasError={!!this.validFields.installments}
              name="installments"
              label="Parcelamento *"
            />
          )}

          {this.installmentsConfig.show &&
            !this.allFieldIsBlank &&
            !!this.validFields.installments && (
              <checkout-error-message message={this.validFields.installments} />
            )}

          {this.allFieldIsBlank && (
            <checkout-error-message message="Preencha todos os campos para prosseguir." />
          )}

          <div class="plug-payments-credit-form__submit">
            <checkout-button
              isLoading={this.isLoading}
              type="submit"
              label="Pagar"
            />
            <checkout-icon icon="poweredByPlug" />
          </div>
        </form>
      </Host>
    )
  }
}
