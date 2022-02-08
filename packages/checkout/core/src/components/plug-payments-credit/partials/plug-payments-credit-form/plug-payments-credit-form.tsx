import {
  Component,
  Host,
  h,
  ComponentInterface,
  Event,
  EventEmitter,
  State,
} from '@stencil/core'

import { getCurrentMaskPerIssuer } from '@plug-checkout/utils'

import credit, { validateCreditForm } from '../../../../stores/credit'
import settings from '../../../../stores/settings'

import { centsToReal } from './plug-payments-credit-form.utils'
@Component({
  tag: 'plug-payments-credit-form',
  styleUrl: 'plug-payments-credit-form.scss',
})
export class PlugPaymentsCreditForm implements ComponentInterface {
  @Event() currentFieldChange: EventEmitter<{ field: string }>

  @State() saveCard = false

  private handleFieldFocused = (field: string) => () => {
    if (credit.validations.allFieldsIsBlank) {
      credit.validations.allFieldsIsBlank = false
    }

    credit.validations.fields = { ...credit.validations.fields, [field]: null }
  }

  private handleFieldBlurred = (field: string) => async (event) => {
    const isMaskedField = ['cvv'].includes(field)
    const normalizedValue = event.target.value.replace(/\D/g, '').trim()

    const validation = await validateCreditForm(
      {
        ...credit.form,
        [field]: isMaskedField ? normalizedValue : event.target.value,
      },
      {
        hasInstallments:
          settings.paymentMethods.credit.installments.show || false,
      },
    )

    credit.validations.fields = {
      ...credit.validations.fields,
      [field]: validation.errors ? validation.errors[field] : '',
    }
  }

  private handleSaveCardChange = () => {
    const value = !credit.form.saveCard

    this.saveCard = value
    credit.form.saveCard = value
  }

  private handleFieldChange = (field: string) => (event) => {
    credit.form = { ...credit.form, [field]: event.target.value }
    this.currentFieldChange.emit({ field })
  }

  private renderInstallmentOptions = () => {
    const installmentOptions = Array.from({
      length: settings.paymentMethods.credit.installments.quantity,
    }).map((_, index) => {
      const currentInstallment = index + 1
      const installmentValue =
        settings.transactionConfig.amount / currentInstallment

      return {
        label: `${currentInstallment}x ${centsToReal(
          installmentValue,
        )}, total ${centsToReal(settings.transactionConfig.amount)}`,
        value: currentInstallment,
      }
    })

    return installmentOptions
  }

  private renderSaveCardLabel = () => {
    if (this.saveCard) {
      return 'Armazenar cartão para compras futuras'
    }

    return 'Não armazenar o cartão para futuras compras'
  }

  render() {
    const saveCardLabel = this.renderSaveCardLabel()

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
        >
          <checkout-text-field
            value={credit.form.cardNumber}
            onInputed={this.handleFieldBlurred('cardNumber')}
            onChanged={this.handleFieldChange('cardNumber')}
            onBlurred={this.handleFieldBlurred('cardNumber')}
            onFocused={this.handleFieldFocused('cardNumber')}
            fullWidth
            inputmode="numeric"
            mask={getCurrentMaskPerIssuer(credit.form.cardNumber)}
            hasValidation={credit.validations.fields.cardNumber !== null}
            hasError={!!credit.validations.fields.cardNumber}
            name="cardNumber"
            label="Número do cartão *"
          />
          {!credit.validations.allFieldsIsBlank &&
            !!credit.validations.fields.cardNumber && (
              <checkout-error-message
                message={credit.validations.fields.cardNumber}
              />
            )}

          <fieldset class="plug-payments-credit-form__row-fields">
            <checkout-text-field
              value={credit.form.expirationDate}
              onInputed={this.handleFieldBlurred('expirationDate')}
              onChanged={this.handleFieldChange('expirationDate')}
              onBlurred={this.handleFieldBlurred('expirationDate')}
              onFocused={this.handleFieldFocused('expirationDate')}
              fullWidth
              inputmode="numeric"
              hasValidation={credit.validations.fields.expirationDate !== null}
              hasError={!!credit.validations.fields.expirationDate}
              name="expirationDate"
              label="Data de expiração (MM/AA) *"
              mask="99/99"
            />

            <checkout-text-field
              value={credit.form.cvv}
              onInputed={this.handleFieldBlurred('cvv')}
              onChanged={this.handleFieldChange('cvv')}
              onBlurred={this.handleFieldBlurred('cvv')}
              onFocused={this.handleFieldFocused('cvv')}
              fullWidth
              inputmode="numeric"
              hasValidation={credit.validations.fields.cvv !== null}
              hasError={!!credit.validations.fields.cvv}
              name="cvv"
              label="Código de segurança (CVV) *"
              mask="9999"
            />
          </fieldset>
          {!credit.validations.allFieldsIsBlank &&
            !!credit.validations.fields.expirationDate && (
              <checkout-error-message
                message={credit.validations.fields.expirationDate}
              />
            )}

          {!credit.validations.allFieldsIsBlank &&
            !!credit.validations.fields.cvv && (
              <checkout-error-message message={credit.validations.fields.cvv} />
            )}

          <checkout-text-field
            value={credit.form.name.toUpperCase()}
            onInputed={this.handleFieldBlurred('name')}
            onChanged={this.handleFieldChange('name')}
            onBlurred={this.handleFieldBlurred('name')}
            onFocused={this.handleFieldFocused('name')}
            fullWidth
            hasValidation={credit.validations.fields.name !== null}
            hasError={!!credit.validations.fields.name}
            name="name"
            label="Nome no cartão *"
          />
          {!credit.validations.allFieldsIsBlank &&
            !!credit.validations.fields.name && (
              <checkout-error-message
                message={credit.validations.fields.name}
              />
            )}

          {settings.paymentMethods?.credit?.installments?.show && (
            <checkout-select-field
              value={credit.form.installments}
              onChanged={this.handleFieldChange('installments')}
              onBlurred={this.handleFieldBlurred('installments')}
              onFocused={this.handleFieldFocused('installments')}
              options={this.renderInstallmentOptions()}
              fullWidth
              hasError={!!credit.validations.fields.installments}
              name="installments"
              label="Parcelamento *"
            />
          )}

          {settings.paymentMethods?.credit?.installments?.show &&
            !credit.validations.allFieldsIsBlank &&
            !!credit.validations.fields.installments && (
              <checkout-error-message
                message={credit.validations.fields.installments}
              />
            )}

          {(settings.transactionConfig.customerId ||
            settings.transactionConfig.customer) && (
            <div class={{ 'plug-payments-credit-form__save-card': true }}>
              <checkout-switch
                checked={credit.form.saveCard}
                onChanged={this.handleSaveCardChange}
              />
              <checkout-typography
                variation="field"
                color="darkness"
                content={saveCardLabel}
              />
            </div>
          )}

          {credit.validations.allFieldsIsBlank && (
            <checkout-error-message message="Preencha todos os campos para prosseguir." />
          )}
        </form>
      </Host>
    )
  }
}
