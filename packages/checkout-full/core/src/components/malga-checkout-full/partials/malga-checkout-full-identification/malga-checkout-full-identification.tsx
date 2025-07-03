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
  brazilianStates,
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
    streetNumber: null,
    complement: null,
    district: null,
    city: null,
    state: null,
    country: null,
  }

  @State() maskIdentification = ''

  private checkValidatedField = () => {
    const optionalBrazilianFields = [
      'complement',
      'documentCountry',
      'documentType',
    ]

    const partialFields = !this.internationalCustomer
      ? optionalBrazilianFields
      : ['complement']

    const validFieldValues = Object.entries(this.validFields)

    const filteredValidFieldValues = validFieldValues
      .filter(([validField]) => !partialFields.includes(validField))
      .filter(([, validFieldValue]) => {
        if (validFieldValue === undefined) return false

        return validFieldValue === null || !!validFieldValue.length
      })

    this.allFieldIsValidated = !filteredValidFieldValues.length
  }

  private handleFieldFocused = () => () => {
    this.checkValidatedField()
  }

  private handleValidationField = (field: string) => async (event) => {
    const valuesToValidate = {
      ...this.formValues,
      [field]: event.target.value,
    }

    const validation = await validateCustomer(
      valuesToValidate,
      { internationalCustomer: this.internationalCustomer },
      this.locale,
    )

    this.validFields = {
      ...this.validFields,
      [field]: validation.errors ? validation.errors[field] : '',
    }

    this.checkValidatedField()
  }

  private handleValidationIdentificationValue = (field: string, customValues: MalgaCheckoutFullIdentificationFormValues) => async () => {
    const validation = await validateCustomer(
      customValues,
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
    const value = field === 'documentType' ? event.target.value :
      (this.formValues.documentCountry !== 'BR' ? event.target.value.replace(/\D/g, '').trim() : event.target.value)

    this.fieldChange.emit({ field, value })

    if (field === 'documentType') {
      this.validFields = {
        ...this.validFields,
        documentType: '',
      }

      this.maskIdentification = getIdentificationMask(
        this.formValues.documentCountry === 'BR' || !this.internationalCustomer,
        value,
        this.formValues.identification
      )

      if (this.formValues.identification) {
        const updatedFormValues = { ...this.formValues, documentType: value }
        this.handleValidationIdentificationValue('identification', updatedFormValues)()
      }
    } else {
      this.maskIdentification = getIdentificationMask(
        this.formValues.documentCountry === 'BR' || !this.internationalCustomer,
        this.formValues.documentType,
        this.formValues.identification
      )
    }

    this.handleValidationField(field)(event)
  }

  private handleChangeCountryFieldChange = (event) => {
    const country = event.target.value

    if (this.formValues.zipCode && this.validFields.zipCode) {
      this.validFields = {
        ...this.validFields,
        zipCode: '',
      }
    }

    this.fieldChange.emit({ field: 'country', value: country })

    this.handleResetStateAfterCountryChange()
    this.checkValidatedField()
  }

  private handleResetStateAfterCountryChange() {
    this.fieldChange.emit({ field: 'state', value: '' })
    this.handleChangeValidField({ field: 'state', value: null })
  }

  private handleResetDocumentTypeAfterCountryChange() {
    this.fieldChange.emit({ field: 'documentType', value: '' })
    this.fieldChange.emit({ field: 'identification', value: '' })
    this.handleChangeValidField({ field: 'documentType', value: null })
    this.handleChangeValidField({ field: 'identification', value: null })
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

    if (documentCountry !== 'BR') {
      this.maskIdentification = ''
    } else {
      const newMask = getIdentificationMask(
        true,
        this.formValues.documentType,
        this.formValues.identification
      )
      this.maskIdentification = newMask
    }

    this.fieldChange.emit({
      field: 'documentCountry',
      value: documentCountry,
    })

    if (this.validFields.identification) {
      this.validFields = {
        ...this.validFields,
        identification: null,
      }
    }

    this.handleValidationField('country')(event)

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

    if (this.formValues.identification) {
      const updatedFormValues = { ...this.formValues, documentCountry }
      this.handleValidationIdentificationValue('identification', updatedFormValues)()
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
    const isTheSelectedCountryBr =
      this.formValues.country === 'BR' || !this.internationalCustomer
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
          onChanged={this.handleFieldChange('name')}
          onBlurred={this.handleValidationField('name')}
          onFocused={this.handleFieldFocused()}
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
          onChanged={this.handleFieldChange('email')}
          onBlurred={this.handleValidationField('email')}
          onFocused={this.handleFieldFocused()}
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
          onChanged={this.handleFieldChange('phoneNumber')}
          onBlurred={this.handleValidationField('phoneNumber')}
          onFocused={this.handleFieldFocused()}
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
                  onBlurred={this.handleValidationField('documentCountry')}
                  onFocused={this.handleFieldFocused()}
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
                      onBlurred={this.handleValidationField('documentType')}
                      onFocused={this.handleFieldFocused()}
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
          onChanged={this.handleFieldChange('identification')}
          onBlurred={this.handleValidationField('identification')}
          onFocused={this.handleFieldFocused()}
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
          autoUnmask
          mask={this.maskIdentification}
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
                onBlurred={this.handleValidationField('zipCode')}
                onFocused={this.handleFieldFocused()}
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

        <Fragment>
          <checkout-select-field
            value={this.formValues.documentCountry || this.formValues.country}
            onChanged={this.handleChangeCountryFieldChange}
            onBlurred={this.handleValidationField('country')}
            onFocused={this.handleFieldFocused()}
            hasError={!!this.validFields.country}
            options={countries(this.locale)}
            fullWidth
            name="country"
            label={t('page.customer.fields.country.label', this.locale)}
          />

          {!!this.validFields.country && (
            <checkout-error-message message={this.validFields.country} />
          )}
        </Fragment>

        {this.internationalCustomer && (
          <Fragment>
            <checkout-text-field
              value={this.formValues.zipCode}
              onChanged={this.handleFieldChange('zipCode')}
              onBlurred={this.handleValidationField('zipCode')}
              onFocused={this.handleFieldFocused()}
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
          onBlurred={this.handleValidationField('street')}
          onFocused={this.handleFieldFocused()}
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
              value={this.formValues.streetNumber}
              onChanged={this.handleFieldChange('streetNumber')}
              onBlurred={this.handleValidationField('streetNumber')}
              onFocused={this.handleFieldFocused()}
              hasValidation={this.validFields.streetNumber !== null}
              hasError={!!this.validFields.streetNumber}
              fullWidth
              inputmode="text"
              name="streetNumber"
              label={t('page.customer.fields.number.label', this.locale)}
            />
            {!!this.validFields.streetNumber && (
              <checkout-error-message message={this.validFields.streetNumber} />
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
              onBlurred={this.handleValidationField('complement')}
              onFocused={this.handleFieldFocused()}
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
          value={this.formValues.district}
          onChanged={this.handleFieldChange('district')}
          onBlurred={this.handleValidationField('district')}
          onFocused={this.handleFieldFocused()}
          hasValidation={this.validFields.district !== null}
          hasError={!!this.validFields.district}
          fullWidth
          inputmode="text"
          name="district"
          label={t('page.customer.fields.neighborhood.label', this.locale)}
        />
        {!!this.validFields.district && (
          <checkout-error-message message={this.validFields.district} />
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
              onBlurred={this.handleValidationField('city')}
              onFocused={this.handleFieldFocused()}
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
            {isTheSelectedCountryBr ? (
              <Fragment>
                <checkout-select-field
                  value={this.formValues.state}
                  onChanged={this.handleFieldChange('state')}
                  onBlurred={this.handleValidationField('state')}
                  onFocused={this.handleFieldFocused()}
                  hasError={!!this.validFields.state}
                  options={brazilianStates}
                  fullWidth
                  name="state"
                  label={t('page.customer.fields.state.label', this.locale)}
                />
                {!!this.validFields.state && (
                  <checkout-error-message message={this.validFields.state} />
                )}
              </Fragment>
            ) : (
              <Fragment>
                <checkout-text-field
                  value={this.formValues.state}
                  onChanged={this.handleFieldChange('state')}
                  onBlurred={this.handleValidationField('state')}
                  onFocused={this.handleFieldFocused()}
                  hasValidation={this.validFields.state !== null}
                  hasError={!!this.validFields.state}
                  fullWidth
                  inputmode="text"
                  name="state"
                  label={t('page.customer.fields.state.label', this.locale)}
                  maxlength={2}
                />
                {!!this.validFields.state && (
                  <checkout-error-message message={this.validFields.state} />
                )}
              </Fragment>
            )}
          </div>
        </fieldset>

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
