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

import { PlugCheckoutFormValues } from '../../plug-checkout.types'

import {
  PlugCheckoutFormCustomStyleFormClasses,
  PlugCheckoutValidFields,
} from './plug-checkout-form.types'

import { defaultCustomStyles } from './plug-checkout-form.utils'
import { validateCheckout } from './plug-checkout-form.schema'

@Component({
  tag: 'plug-checkout-form',
  styleUrl: 'plug-checkout-form.scss',
})
export class PlugCheckoutForm implements ComponentInterface {
  @Prop() formValues: PlugCheckoutFormValues
  @Prop() customFormStyleClasses?: PlugCheckoutFormCustomStyleFormClasses =
    defaultCustomStyles

  @Event() formSubmit: EventEmitter<void>
  @Event() fieldChange: EventEmitter<{ field: string; value: string }>

  @State() validFields: PlugCheckoutValidFields = {
    cardNumber: null,
    cvv: null,
    installments: null,
    name: null,
    expirationDate: null,
  }

  private handleFieldFocused = (field: string) => () => {
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
      { hasInstallments: true },
    )

    this.validFields = {
      ...this.validFields,
      [field]: validation.errors[field],
    }
  }

  private handleFieldChange = (field: string) => (event) => {
    this.fieldChange.emit({ field, value: event.target.value })
  }

  private handleFormSubmit = (event) => {
    event.preventDefault()
    this.formSubmit.emit()
  }

  render() {
    return (
      <Host
        class={{
          'plug-checkout-form__container': true,
          [this.customFormStyleClasses.formContainer]:
            !!this.customFormStyleClasses.formContainer,
        }}
      >
        <form
          class={{
            'plug-checkout-form__form': true,
            [this.customFormStyleClasses.formContent]:
              !!this.customFormStyleClasses.formContent,
          }}
          onSubmit={this.handleFormSubmit}
        >
          <checkout-input
            value={this.formValues.cardNumber}
            onChanged={this.handleFieldChange('cardNumber')}
            onBlurred={this.handleFieldBlurred('cardNumber')}
            onFocused={this.handleFieldFocused('cardNumber')}
            fullWidth
            inputmode="numeric"
            startIcon="creditCard"
            hasValidation={this.validFields.cardNumber !== null}
            hasError={!!this.validFields.cardNumber}
            name="cardNumber"
            label="Número do cartão"
            placeholder="Número do cartão"
            customContainerClass={
              this.customFormStyleClasses.creditCardFieldContainer
            }
            customInputClass={
              this.customFormStyleClasses.creditCardFieldInputContainer
            }
            customLabelClass={
              this.customFormStyleClasses.creditCardFieldLabelContainer
            }
          />
          {!!this.validFields.cardNumber && (
            <checkout-error-message message={this.validFields.cardNumber} />
          )}

          <fieldset class="plug-checkout-form__row-fields">
            <checkout-input
              value={this.formValues.expirationDate}
              onChanged={this.handleFieldChange('expirationDate')}
              onBlurred={this.handleFieldBlurred('expirationDate')}
              onFocused={this.handleFieldFocused('expirationDate')}
              fullWidth
              inputmode="numeric"
              startIcon="calendar"
              hasValidation={this.validFields.expirationDate !== null}
              hasError={!!this.validFields.expirationDate}
              name="expirationDate"
              label="Validade"
              placeholder="MM/AA"
              mask="99/99"
              customContainerClass={
                this.customFormStyleClasses.expirationDateFieldContainer
              }
              customInputClass={
                this.customFormStyleClasses.expirationDateFieldInputContainer
              }
              customLabelClass={
                this.customFormStyleClasses.expirationDateFieldLabelContainer
              }
            />

            <checkout-input
              value={this.formValues.cvv}
              onChanged={this.handleFieldChange('cvv')}
              onBlurred={this.handleFieldBlurred('cvv')}
              onFocused={this.handleFieldFocused('cvv')}
              fullWidth
              inputmode="numeric"
              startIcon="cvv"
              hasValidation={this.validFields.cvv !== null}
              hasError={!!this.validFields.cvv}
              name="cvv"
              label="Código de segurança"
              placeholder="CVV"
              mask="999"
              customContainerClass={
                this.customFormStyleClasses.cvvFieldContainer
              }
              customInputClass={
                this.customFormStyleClasses.cvvFieldInputContainer
              }
              customLabelClass={
                this.customFormStyleClasses.cvvFieldLabelContainer
              }
            />
          </fieldset>
          {!!this.validFields.expirationDate && (
            <checkout-error-message message={this.validFields.expirationDate} />
          )}

          {!!this.validFields.cvv && (
            <checkout-error-message message={this.validFields.cvv} />
          )}

          <checkout-input
            value={this.formValues.name}
            onChanged={this.handleFieldChange('name')}
            onBlurred={this.handleFieldBlurred('name')}
            onFocused={this.handleFieldFocused('name')}
            fullWidth
            startIcon="user"
            hasValidation={this.validFields.name !== null}
            hasError={!!this.validFields.name}
            name="name"
            label="Portador do cartão"
            placeholder="Nome (igual ao do cartão)"
            customContainerClass={
              this.customFormStyleClasses.nameFieldContainer
            }
            customInputClass={
              this.customFormStyleClasses.nameFieldInputContainer
            }
            customLabelClass={
              this.customFormStyleClasses.nameFieldLabelContainer
            }
          />
          {!!this.validFields.name && (
            <checkout-error-message message={this.validFields.name} />
          )}

          <checkout-select
            value={this.formValues.installments}
            onChanged={this.handleFieldChange('installments')}
            onBlurred={this.handleFieldBlurred('installments')}
            onFocused={this.handleFieldFocused('installments')}
            fullWidth
            startIcon="dollar"
            hasValidation
            hasError={!!this.validFields.installments}
            name="installments"
            label="Parcelas"
            customContainerClass={
              this.customFormStyleClasses.installmentsFieldContainer
            }
            customSelectClass={
              this.customFormStyleClasses.installmentsFieldSelectContainer
            }
            customLabelClass={
              this.customFormStyleClasses.installmentsFieldLabelContainer
            }
          />
          {!!this.validFields.installments && (
            <checkout-error-message message={this.validFields.installments} />
          )}

          <checkout-button
            customClass={this.customFormStyleClasses.submitButton}
            type="submit"
            fullWidth
            icon="lock"
            label="Finalizar Pagamento"
          />
        </form>
      </Host>
    )
  }
}
