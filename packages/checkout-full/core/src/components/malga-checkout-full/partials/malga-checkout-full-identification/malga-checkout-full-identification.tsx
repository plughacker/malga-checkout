import {
  Component,
  Host,
  h,
  Event,
  EventEmitter,
  State,
  Prop,
  Fragment,
} from '@stencil/core'

import {
  countries,
  cleanTextOnlyNumbers,
  documentCountries,
  documentTypesByCountry,
} from '@malga-checkout/utils'

import { MalgaCheckoutFullIdentificationService } from './malga-checkout-full-identification.service'
import {
  MalgaCheckoutFullIdentificationFormValues,
  MalgaCheckoutFullIdentificationFormValidFields,
} from './malga-checkout-full-identification.types'
import { validateCustomer } from './malga-checkout-full-identification.schema'
import {
  getIdentificationMask,
  validAddressAutocomplete,
} from './malga-checkout-full-identification.utils'
import { t } from '@malga-checkout/i18n'
import { Locale } from '@malga-checkout/i18n/dist/utils'

@Component({
  tag: 'malga-checkout-full-identification',
  styleUrl: 'malga-checkout-full-identification.scss',
})
export class MalgaCheckoutFullIdentification {
  identificationService = new MalgaCheckoutFullIdentificationService()

  @Prop() locale?: Locale
  @Prop() formValues: MalgaCheckoutFullIdentificationFormValues
  @Prop() internationalCustomer: boolean
  @Prop() isLoading = false

  @Event() submitForm: EventEmitter<void>
  @Event() fieldChange: EventEmitter<{ field: string; value: string }>
  @Event() manyFieldsChange: EventEmitter<{
    customerFormValues: MalgaCheckoutFullIdentificationFormValues
  }>

  @State() allFieldIsValidated = false
  @State() validFields: MalgaCheckoutFullIdentificationFormValidFields = {
    name: null,
    email: null,
    phoneNumber: null,
    documentCountry: null,
    documentType: null,
    identification: null,
    zipCode: null,
    street: null,
    number: null,
    complement: null,
    neighborhood: null,
    city: null,
    state: null,
    country: null,
  }

  private checkValidatedField = () => {
    const optionalFields = [
      'documentCountry',
      'documentType',
      'zipCode',
      'street',
      'number',
      'complement',
      'neighborhood',
      'city',
      'state',
      'country',
    ]

    const partialFields = !this.internationalCustomer ? optionalFields : []

    const validFieldValues = Object.entries(this.validFields)

    const filteredValidFieldValues = validFieldValues
      .filter(([validField]) => !partialFields.includes(validField))
      .filter(([, validFieldValue]) => {
        if (validFieldValue === undefined) return false

        return validFieldValue === null || !!validFieldValue.length
      })

    this.allFieldIsValidated = !filteredValidFieldValues.length
  }

  private handleFieldFocused = (field: string) => () => {
    this.handleChangeValidField({ field, value: null })
    this.checkValidatedField()
  }

  private handleFieldBlurred = (field: string) => async (event) => {
    const validation = await validateCustomer(
      {
        ...this.formValues,
        [field]: event.target.value,
      },
      { internationalCustomer: this.internationalCustomer },
      this.locale,
    )

    this.validFields = {
      ...this.validFields,
      [field]: validation.errors ? validation.errors[field] : '',
    }

    this.checkValidatedField()
  }

  private handleFieldChange = (field: string) => (event) => {
    this.fieldChange.emit({ field, value: event.target.value })
    this.checkValidatedField()
  }

  private handleResetDocumentTypeAfterCountryChange() {
    this.fieldChange.emit({ field: 'documentType', value: '' })
    this.handleChangeValidField({ field: 'documentType', value: null })
  }

  private handleChangeValidField({ field, value }) {
    this.validFields = {
      ...this.validFields,
      [field]: value,
    }
  }

  private handleChangeDocumentCountry = (event) => {
    const documentCountry = event.target.value
    const documentTypesByCountries = documentTypesByCountry(this.locale)

    this.fieldChange.emit({
      field: 'documentCountry',
      value: documentCountry,
    })

    const shouldAddOtherToDocumentType =
      !documentTypesByCountries[documentCountry]

    if (shouldAddOtherToDocumentType) {
      this.fieldChange.emit({
        field: 'documentType',
        value: 'other',
      })

      this.handleChangeValidField({ field: 'documentType', value: undefined })
    } else {
      this.handleResetDocumentTypeAfterCountryChange()
    }

    this.checkValidatedField()
  }

  private handleZipCodeFieldChange = async (event) => {
    const zipCode = event.target.value
    const zipCodeValue = cleanTextOnlyNumbers(zipCode)

    this.fieldChange.emit({ field: 'zipCode', value: zipCode })

    if (zipCodeValue.length === 8) {
      const address =
        await this.identificationService.getInformationsAboutZipCode(
          zipCodeValue,
        )

      const validAddress = validAddressAutocomplete(address)

      this.manyFieldsChange.emit({
        customerFormValues: { ...this.formValues, ...address, zipCode },
      })

      this.validFields = {
        ...this.validFields,
        ...validAddress,
      }

      this.checkValidatedField()

      return
    }

    this.checkValidatedField()
  }

  private handleSubmitForm = () => {
    this.submitForm.emit()
  }

  render() {
    const documentTypesByCountries = documentTypesByCountry(this.locale)
    const hasDocumentTypes =
      !this.formValues.documentCountry ||
      documentTypesByCountries[this.formValues.documentCountry]

    if (this.isLoading) {
      return (
        <Host class={{ 'malga-checkout-full-identification__loader': true }}>
          <checkout-loader />
        </Host>
      )
    }

    return (
      <Host class={{ 'malga-checkout-full-identification__container': true }}>
        <checkout-typography
          tag="h4"
          variation="subtitle1"
          content={t('page.customer.personalData', this.locale)}
        />
        <checkout-text-field
          value={this.formValues.name}
          onInputed={this.handleFieldBlurred('name')}
          onChanged={this.handleFieldChange('name')}
          onBlurred={this.handleFieldBlurred('name')}
          onFocused={this.handleFieldFocused('name')}
          hasValidation={this.validFields.name !== null}
          hasError={!!this.validFields.name}
          fullWidth
          inputmode="text"
          name="name"
          label={t('page.customer.fields.name.label', this.locale)}
        />
        {!!this.validFields.name && (
          <checkout-error-message message={this.validFields.name} />
        )}

        <checkout-text-field
          value={this.formValues.email}
          onInputed={this.handleFieldBlurred('email')}
          onChanged={this.handleFieldChange('email')}
          onBlurred={this.handleFieldBlurred('email')}
          onFocused={this.handleFieldFocused('email')}
          hasValidation={this.validFields.email !== null}
          hasError={!!this.validFields.email}
          fullWidth
          inputmode="email"
          name="email"
          label={t('page.customer.fields.email.label', this.locale)}
        />
        {!!this.validFields.email && (
          <checkout-error-message message={this.validFields.email} />
        )}

        <checkout-text-field
          value={this.formValues.phoneNumber}
          onInputed={this.handleFieldBlurred('phoneNumber')}
          onChanged={this.handleFieldChange('phoneNumber')}
          onBlurred={this.handleFieldBlurred('phoneNumber')}
          onFocused={this.handleFieldFocused('phoneNumber')}
          hasValidation={this.validFields.phoneNumber !== null}
          hasError={!!this.validFields.phoneNumber}
          fullWidth
          type="tel"
          inputmode="tel"
          name="phoneNumber"
          label={t('page.customer.fields.phoneNumber.label', this.locale)}
        />
        {!!this.validFields.phoneNumber && (
          <checkout-error-message message={this.validFields.phoneNumber} />
        )}

        <checkout-typography
          tag="h4"
          variation="subtitle1"
          content={t('page.customer.document', this.locale)}
        />

        {this.internationalCustomer && (
          <Fragment>
            <fieldset
              class={{
                'malga-checkout-full-identification__row-fields': true,
                'malga-checkout-full-identification__international-fields':
                  true,
              }}
            >
              <span
                class={{
                  'malga-checkout-full-identification__error-message': true,
                }}
              >
                <checkout-select-field
                  value={this.formValues.documentCountry}
                  onChanged={this.handleChangeDocumentCountry}
                  onInputed={this.handleFieldBlurred('documentCountry')}
                  onBlurred={this.handleFieldBlurred('documentCountry')}
                  onFocused={this.handleFieldFocused('documentCountry')}
                  hasError={!!this.validFields.documentCountry}
                  options={documentCountries(this.locale)}
                  fullWidth
                  name="documentCountry"
                  label={t(
                    'page.customer.fields.documentCountry.label',
                    this.locale,
                  )}
                />
                {!!this.validFields.documentCountry && (
                  <checkout-error-message
                    message={this.validFields.documentCountry}
                  />
                )}
              </span>

              {hasDocumentTypes && (
                <span
                  class={{
                    'malga-checkout-full-identification__error-message': true,
                  }}
                >
                  <Fragment>
                    <checkout-select-field
                      value={this.formValues.documentType}
                      onChanged={this.handleFieldChange('documentType')}
                      onInputed={this.handleFieldBlurred('documentType')}
                      onBlurred={this.handleFieldBlurred('documentType')}
                      onFocused={this.handleFieldFocused('documentType')}
                      hasError={!!this.validFields.documentType}
                      options={
                        documentTypesByCountries[
                          this.formValues.documentCountry
                        ]
                      }
                      fullWidth
                      name="documentType"
                      label={t(
                        'page.customer.fields.documentType.label',
                        this.locale,
                      )}
                    />
                    {!!this.validFields.documentType && (
                      <checkout-error-message
                        message={this.validFields.documentType}
                      />
                    )}
                  </Fragment>
                </span>
              )}
            </fieldset>
          </Fragment>
        )}

        <checkout-text-field
          value={this.formValues.identification}
          onInputed={this.handleFieldBlurred('identification')}
          onChanged={this.handleFieldChange('identification')}
          onBlurred={this.handleFieldBlurred('identification')}
          onFocused={this.handleFieldFocused('identification')}
          hasValidation={this.validFields.identification !== null}
          hasError={!!this.validFields.identification}
          fullWidth
          inputmode="numeric"
          name="identification"
          label={
            !this.internationalCustomer
              ? t(
                  'page.customer.fields.identification.labelBrazil',
                  this.locale,
                )
              : t(
                  'page.customer.fields.identification.labelInternational',
                  this.locale,
                )
          }
          mask={
            !this.internationalCustomer
              ? getIdentificationMask(this.formValues.identification)
              : null
          }
        />
        {!!this.validFields.identification && (
          <checkout-error-message message={this.validFields.identification} />
        )}

        <checkout-typography
          tag="h4"
          variation="subtitle1"
          content={t('page.customer.address', this.locale)}
        />

        {!this.internationalCustomer && (
          <fieldset
            class={{ 'malga-checkout-full-identification__zipcode': true }}
          >
            <div
              class={{
                'malga-checkout-full-identification__error-message': true,
              }}
            >
              <checkout-text-field
                value={this.formValues.zipCode}
                onChanged={this.handleZipCodeFieldChange}
                onInputed={this.handleFieldBlurred('zipCode')}
                onBlurred={this.handleFieldBlurred('zipCode')}
                onFocused={this.handleFieldFocused('zipCode')}
                hasValidation={this.validFields.zipCode !== null}
                hasError={!!this.validFields.zipCode}
                fullWidth
                inputmode="numeric"
                name="zipCode"
                label={t(
                  'page.customer.fields.zipCode.labelBrazil',
                  this.locale,
                )}
                mask="99999-999"
              />
              {!!this.validFields.zipCode && (
                <checkout-error-message message={this.validFields.zipCode} />
              )}
            </div>

            <a
              href="https://buscacepinter.correios.com.br/app/endereco/index.php"
              target="_blank"
            >
              {t('page.customer.fields.zipCode.descriptionBrazil', this.locale)}
            </a>
          </fieldset>
        )}

        {this.internationalCustomer && (
          <Fragment>
            <checkout-text-field
              value={this.formValues.zipCode}
              onChanged={this.handleFieldChange('zipCode')}
              onInputed={this.handleFieldBlurred('zipCode')}
              onBlurred={this.handleFieldBlurred('zipCode')}
              onFocused={this.handleFieldFocused('zipCode')}
              hasValidation={this.validFields.zipCode !== null}
              hasError={!!this.validFields.zipCode}
              fullWidth
              inputmode="text"
              name="zipCode"
              label={t(
                'page.customer.fields.zipCode.labelInternational',
                this.locale,
              )}
            />
            {!!this.validFields.zipCode && (
              <checkout-error-message message={this.validFields.zipCode} />
            )}
          </Fragment>
        )}

        <checkout-text-field
          value={this.formValues.street}
          onChanged={this.handleFieldChange('street')}
          onInputed={this.handleFieldBlurred('street')}
          onBlurred={this.handleFieldBlurred('street')}
          onFocused={this.handleFieldFocused('street')}
          hasValidation={this.validFields.street !== null}
          hasError={!!this.validFields.street}
          fullWidth
          inputmode="text"
          name="street"
          label={t('page.customer.fields.street.label', this.locale)}
        />
        {!!this.validFields.street && (
          <checkout-error-message message={this.validFields.street} />
        )}

        <fieldset
          class={{ 'malga-checkout-full-identification__row-fields': true }}
        >
          <div
            class={{
              'malga-checkout-full-identification__error-message': true,
            }}
          >
            <checkout-text-field
              value={this.formValues.number}
              onChanged={this.handleFieldChange('number')}
              onInputed={this.handleFieldBlurred('number')}
              onBlurred={this.handleFieldBlurred('number')}
              onFocused={this.handleFieldFocused('number')}
              hasValidation={this.validFields.number !== null}
              hasError={!!this.validFields.number}
              fullWidth
              inputmode="text"
              name="number"
              label={t('page.customer.fields.number.label', this.locale)}
            />
            {!!this.validFields.number && (
              <checkout-error-message message={this.validFields.number} />
            )}
          </div>

          <div
            class={{
              'malga-checkout-full-identification__error-message': true,
            }}
          >
            <checkout-text-field
              value={this.formValues.complement}
              onChanged={this.handleFieldChange('complement')}
              onInputed={this.handleFieldBlurred('complement')}
              onBlurred={this.handleFieldBlurred('complement')}
              onFocused={this.handleFieldFocused('complement')}
              hasValidation={this.validFields.complement !== null}
              hasError={!!this.validFields.complement}
              fullWidth
              inputmode="text"
              name="complement"
              label={t('page.customer.fields.complement.label', this.locale)}
            />
            {!!this.validFields.complement && (
              <checkout-error-message message={this.validFields.complement} />
            )}
          </div>
        </fieldset>

        <checkout-text-field
          value={this.formValues.neighborhood}
          onChanged={this.handleFieldChange('neighborhood')}
          onInputed={this.handleFieldBlurred('neighborhood')}
          onBlurred={this.handleFieldBlurred('neighborhood')}
          onFocused={this.handleFieldFocused('neighborhood')}
          hasValidation={this.validFields.neighborhood !== null}
          hasError={!!this.validFields.neighborhood}
          fullWidth
          inputmode="text"
          name="neighborhood"
          label={t('page.customer.fields.neighborhood.label', this.locale)}
        />
        {!!this.validFields.neighborhood && (
          <checkout-error-message message={this.validFields.neighborhood} />
        )}

        <fieldset
          class={{ 'malga-checkout-full-identification__row-fields': true }}
        >
          <div
            class={{
              'malga-checkout-full-identification__error-message': true,
            }}
          >
            <checkout-text-field
              value={this.formValues.city}
              onChanged={this.handleFieldChange('city')}
              onInputed={this.handleFieldBlurred('city')}
              onBlurred={this.handleFieldBlurred('city')}
              onFocused={this.handleFieldFocused('city')}
              hasValidation={this.validFields.city !== null}
              hasError={!!this.validFields.city}
              fullWidth
              inputmode="text"
              name="city"
              label={t('page.customer.fields.city.label', this.locale)}
            />
            {!!this.validFields.city && (
              <checkout-error-message message={this.validFields.city} />
            )}
          </div>

          <div
            class={{
              'malga-checkout-full-identification__error-message': true,
            }}
          >
            <checkout-text-field
              value={this.formValues.state}
              onChanged={this.handleFieldChange('state')}
              onInputed={this.handleFieldBlurred('state')}
              onBlurred={this.handleFieldBlurred('state')}
              onFocused={this.handleFieldFocused('state')}
              hasValidation={this.validFields.state !== null}
              hasError={!!this.validFields.state}
              fullWidth
              inputmode="text"
              name="state"
              label={t('page.customer.fields.state.label', this.locale)}
            />
            {!!this.validFields.state && (
              <checkout-error-message message={this.validFields.state} />
            )}
          </div>
        </fieldset>

        <checkout-select-field
          value={this.formValues.country}
          onChanged={this.handleFieldChange('country')}
          onInputed={this.handleFieldBlurred('country')}
          onBlurred={this.handleFieldBlurred('country')}
          onFocused={this.handleFieldFocused('country')}
          hasError={!!this.validFields.country}
          options={countries(this.locale)}
          fullWidth
          name="country"
          label={t('page.customer.fields.country.label', this.locale)}
        />
        {!!this.validFields.country && (
          <checkout-error-message message={this.validFields.country} />
        )}

        <checkout-button
          type="submit"
          locale={this.locale}
          label={t('page.customer.submitButton', this.locale)}
          disabled={!this.allFieldIsValidated}
          onClick={this.handleSubmitForm}
        />
      </Host>
    )
  }
}
