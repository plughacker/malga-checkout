import { t } from '@malga-checkout/i18n'
import {
  Component,
  Host,
  h,
  ComponentInterface,
  Event,
  EventEmitter,
  State,
} from '@stencil/core'

import cardValidator from '@malga/card-validator'

import credit, { validateCreditForm } from '../../../../stores/credit'
import settings from '../../../../stores/settings'

import { centsToReal } from './malga-payments-credit-form.utils'
@Component({
  tag: 'malga-payments-credit-form',
  styleUrl: 'malga-payments-credit-form.scss',
})
export class MalgaPaymentsCreditForm implements ComponentInterface {
  @Event() currentFieldChange: EventEmitter<{ field: string }>

  @State() maskCardNumber = ''

  private handleFieldFocused = (field: string) => () => {
    if (credit.validations.allFieldsIsBlank) {
      credit.validations = { ...credit.validations, allFieldsIsBlank: false }
    }

    credit.validations = {
      ...credit.validations,
      fields: {
        ...credit.validations.fields,
        [field]: credit.form[field] ? credit.validations.fields[field] : null,
      },
    }
  }

  private handleValidationField = (field: string) => async (event) => {
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
      settings.locale,
    )

    credit.validations = {
      ...credit.validations,
      fields: {
        ...credit.validations.fields,
        [field]: validation.errors ? validation.errors[field] : '',
      },
    }
  }

  private handleSaveCardChange = () => {
    credit.form = { ...credit.form, saveCard: !credit.form.saveCard }
  }

  private handleFieldChange = (field: string) => (event) => {
    if (field === 'cardNumber') {
      const { card } = cardValidator.valid.number(event.target.value)

      if (card.type) {
        const newMask = cardValidator.maskCardNumber(card.type, '9')

        if (this.maskCardNumber !== newMask) {
          this.maskCardNumber = newMask
        }
      }
    }

    credit.form = { ...credit.form, [field]: event.target.value }
    this.currentFieldChange.emit({ field })
    this.handleValidationField(field)(event)
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
          settings.transactionConfig.currency,
        )}, ${t('common.total', settings.locale)} ${centsToReal(
          settings.transactionConfig.amount,
          settings.transactionConfig.currency,
        )}`,
        value: String(currentInstallment),
      }
    })

    return installmentOptions
  }

  private handleValidationInstallments = async () => {
    const { quantity, show } = settings.paymentMethods.credit.installments

    if (show && quantity === 1) {
      credit.form = {
        ...credit.form,
        installments: '1',
      }

      const validation = await validateCreditForm(
        credit.form,
        {
          hasInstallments:
            settings.paymentMethods.credit.installments.show || false,
        },
        settings.locale,
      )

      credit.validations = {
        ...credit.validations,
        fields: {
          ...credit.validations.fields,
          installments: validation.errors
            ? validation.errors['installments']
            : '',
        },
      }
    }
  }

  private handleCheckedSaveCard = () => {
    if (settings.paymentMethods.credit.checkedSaveCard) {
      credit.form = {
        ...credit.form,
        saveCard: settings.paymentMethods.credit.checkedSaveCard,
      }
    }
  }

  componentWillLoad() {
    this.handleCheckedSaveCard()
    this.handleValidationInstallments()
  }

  render() {
    return (
      <Host
        class={{
          'malga-payments-credit-form__container': true,
        }}
      >
        <form
          class={{
            'malga-payments-credit-form__form': true,
          }}
        >
          <checkout-text-field
            value={credit.form.cardNumber}
            autoUnmask={true}
            onChanged={this.handleFieldChange('cardNumber')}
            onBlurred={this.handleValidationField('cardNumber')}
            onFocused={this.handleFieldFocused('cardNumber')}
            onPaste={this.handleFieldChange('cardNumber')}
            fullWidth
            inputmode="numeric"
            mask={this.maskCardNumber}
            hasValidation={credit.validations.fields.cardNumber !== null}
            hasError={!!credit.validations.fields.cardNumber}
            name="cardNumber"
            label={t(
              'paymentMethods.card.newCard.fields.cardNumber.label',
              settings.locale,
            )}
          />
          {!credit.validations.allFieldsIsBlank &&
            !!credit.validations.fields.cardNumber && (
              <checkout-error-message
                message={credit.validations.fields.cardNumber}
              />
            )}

          <fieldset class="malga-payments-credit-form__row-fields">
            <div class="malga-payments-credit__error-message">
              <checkout-text-field
                value={credit.form.expirationDate}
                onChanged={this.handleFieldChange('expirationDate')}
                onBlurred={this.handleValidationField('expirationDate')}
                onFocused={this.handleFieldFocused('expirationDate')}
                onPaste={this.handleFieldChange('expirationDate')}
                fullWidth
                inputmode="numeric"
                hasValidation={
                  credit.validations.fields.expirationDate !== null
                }
                hasError={!!credit.validations.fields.expirationDate}
                name="expirationDate"
                label={t(
                  'paymentMethods.card.newCard.fields.expirationDate.label',
                  settings.locale,
                )}
                mask="99/99"
              />
              {!credit.validations.allFieldsIsBlank &&
                !!credit.validations.fields.expirationDate && (
                  <checkout-error-message
                    message={credit.validations.fields.expirationDate}
                  />
                )}
            </div>
            <div class="malga-payments-credit__error-message">
              <checkout-text-field
                value={credit.form.cvv}
                onChanged={this.handleFieldChange('cvv')}
                onBlurred={this.handleValidationField('cvv')}
                onFocused={this.handleFieldFocused('cvv')}
                onPaste={this.handleFieldChange('cvv')}
                fullWidth
                inputmode="numeric"
                hasValidation={credit.validations.fields.cvv !== null}
                hasError={!!credit.validations.fields.cvv}
                name="cvv"
                label={t(
                  'paymentMethods.card.newCard.fields.cvv.label',
                  settings.locale,
                )}
                mask="9999"
              />
              {!credit.validations.allFieldsIsBlank &&
                !!credit.validations.fields.cvv && (
                  <checkout-error-message
                    message={credit.validations.fields.cvv}
                  />
                )}
            </div>
          </fieldset>

          <checkout-text-field
            value={credit.form.name.toUpperCase()}
            onChanged={this.handleFieldChange('name')}
            onBlurred={this.handleValidationField('name')}
            onFocused={this.handleFieldFocused('name')}
            onPaste={this.handleFieldChange('name')}
            fullWidth
            hasValidation={credit.validations.fields.name !== null}
            hasError={!!credit.validations.fields.name}
            name="name"
            label={t(
              'paymentMethods.card.newCard.fields.name.label',
              settings.locale,
            )}
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
              onBlurred={this.handleValidationField('installments')}
              onFocused={this.handleFieldFocused('installments')}
              options={this.renderInstallmentOptions()}
              fullWidth
              hasError={!!credit.validations.fields.installments}
              name="installments"
              label={t(
                'paymentMethods.card.newCard.fields.installments.label',
                settings.locale,
              )}
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
              <div class={{ 'malga-payments-credit-form__save-card': true }}>
                <checkout-switch
                  checked={credit.form.saveCard}
                  onChanged={this.handleSaveCardChange}
                />
                <checkout-typography
                  variation="field"
                  color="darkness"
                  content={t(
                    'paymentMethods.card.newCard.fields.saveCard.label',
                    settings.locale,
                  )}
                />
              </div>
            )}

          {credit.validations.allFieldsIsBlank && (
            <checkout-error-message
              message={t(
                'paymentMethods.card.newCard.errorMessageAllFieldsRequired',
                settings.locale,
              )}
            />
          )}
        </form>
      </Host>
    )
  }
}
