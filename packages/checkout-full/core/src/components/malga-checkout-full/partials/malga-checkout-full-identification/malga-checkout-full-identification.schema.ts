import * as Yup from 'yup'

import {
  validateTaxId,
  cleanTextOnlyNumbers,
  cleanTextSpecialCharacters,
  isZipCodeValid,
} from '@malga-checkout/utils'

import { MalgaCheckoutFullIdentificationFormValues } from './malga-checkout-full-identification.types'
import {
  handleCpfOrCnpjInvalidMessage,
  normalizeValidationErrors,
} from './malga-checkout-full-identification.utils'
import { Locale } from '@malga-checkout/i18n/dist/utils'
import { t } from '@malga-checkout/i18n'

export const schema = (locale?: Locale) => {
  return Yup.object().shape({
    name: Yup.string().required(
      t('page.customer.fields.name.errorMessageRequired', locale),
    ),
    email: Yup.string()
      .email(t('page.customer.fields.email.errorMessageInvalidFormat', locale))
      .required(t('page.customer.fields.email.errorMessageRequired', locale)),
    phoneNumber: Yup.string().required(
      t('page.customer.fields.phoneNumber.errorMessageRequired', locale),
    ),
    documentType: Yup.string().when(['$internationalCustomer'], {
      is: (internationalCustomer: boolean) => internationalCustomer,
      then: Yup.string().test(
        'isValidDocumentType',
        t('page.customer.fields.documentType.errorMessageRequired', locale),
        (value) => value !== 'none',
      ),
    }),
    documentCountry: Yup.string().when(['$internationalCustomer'], {
      is: (internationalCustomer: boolean) => internationalCustomer,
      then: Yup.string().test(
        'isValidDocumentCountry',
        t('page.customer.fields.documentCountry.errorMessageRequired', locale),
        (value) => value !== 'none',
      ),
    }),
    identification: Yup.string()
      .when(['$internationalCustomer'], {
        is: (internationalCustomer: boolean) => !internationalCustomer,
        then: Yup.string()
          .required(
            t(
              'page.customer.fields.identification.errorMessageRequiredBrazil',
              locale,
            ),
          )
          .test({
            name: 'isValidCpfOrCnpj',
            test(value, context) {
              if (!value) return true

              const errorMessage = handleCpfOrCnpjInvalidMessage(value, locale, context.parent.documentType)

              if (errorMessage) {
                return context.createError({
                  message: errorMessage,
                })
              }

              return true
            },
          }),
      })
      .when(['$internationalCustomer'], {
        is: (internationalCustomer: boolean) => internationalCustomer,
        then: Yup.string()
          .required(
            t(
              'page.customer.fields.identification.errorMessageRequiredInternational',
              locale,
            ),
          )
          .test({
            name: 'isValidIdentification',
            test(value, context) {
              if (!value) return true

              if (context.parent.documentCountry === 'BR') {
                const errorMessage = handleCpfOrCnpjInvalidMessage(
                  value,
                  locale,
                  context.parent.documentType,
                )

                if (errorMessage) {
                  return context.createError({
                    message: errorMessage,
                  })
                }

                return true
              }

              if (context.parent.documentType === 'other') {
                return true
              }

              const documentNumber = cleanTextSpecialCharacters(value)

              const isValid = validateTaxId(
                context.parent.documentCountry,
                context.parent.documentType,
                documentNumber,
              )

              if (!isValid) {
                return context.createError({
                  message: t(
                    'page.customer.fields.identification.errorMessageInvalidFormatInternational',
                    locale,
                  ),
                })
              }

              return true
            },
          })
          .test(
            'isValidCountryAndType',
            t(
              'page.customer.fields.identification.errorRequiredCountryAndType',
              locale,
            ),
            (value, context) => {
              if (value.length === 0) return true

              if (
                !context.parent.documentType ||
                context.parent.documentType === 'none' ||
                !context.parent.documentCountry ||
                context.parent.documentCountry === 'none'
              ) {
                return false
              }

              return true
            },
          ),
      }),
    street: Yup.string().required(
      t('page.customer.fields.street.errorMessageRequired', locale),
    ),
    streetNumber: Yup.string().required(
      t('page.customer.fields.number.errorMessageRequired', locale),
    ),
    complement: Yup.string().optional(),
    district: Yup.string().required(
      t('page.customer.fields.neighborhood.errorMessageRequired', locale),
    ),
    city: Yup.string().required(
      t('page.customer.fields.city.errorMessageRequired', locale),
    ),
    state: Yup.string().required(
      t('page.customer.fields.state.errorMessageRequired', locale),
    ),
    country: Yup.string().required(
      t('page.customer.fields.country.errorMessageRequired', locale),
    ),
    zipCode: Yup.string()
      .trim()
      .when(['$internationalCustomer'], {
        is: (internationalCustomer: boolean) => !internationalCustomer,
        then: Yup.string()
          .transform((value) => cleanTextOnlyNumbers(value))
          .required(
            t(
              'page.customer.fields.zipCode.errorMessageRequiredBrazil',
              locale,
            ),
          ),
      })
      .when(['$internationalCustomer'], {
        is: (internationalCustomer: boolean) => internationalCustomer,
        then: Yup.string()
          .transform((value) => cleanTextSpecialCharacters(value))
          .required(
            t(
              'page.customer.fields.zipCode.errorMessageRequiredInternational',
              locale,
            ),
          ),
      })
      .test(
        'isValidZipcode',
        t(
          'page.customer.fields.zipCode.errorMessageInvalidZipCodeFormat',
          locale,
        ),
        (value, context) => {
          return isZipCodeValid(value, context.parent.country)
        },
      )
      .test(
        'isValidCountry',
        t('page.customer.fields.zipCode.errorMessageRequiredCountry', locale),
        (value, context) => {
          if (value.length === 0) return true

          if (!context.parent.country || context.parent.country === 'none') {
            return false
          }

          return true
        },
      ),
  })
}

export const validateCustomer = async (
  data: Partial<MalgaCheckoutFullIdentificationFormValues>,
  context?: Record<string, unknown>,
  locale?: Locale,
) => {
  try {
    const customerSchema = schema(locale)
    await customerSchema.validate(data, {
      abortEarly: false,
      context,
    })

    return { isValid: true }
  } catch (error) {
    const errors = normalizeValidationErrors(error.inner)

    return { isValid: false, errors }
  }
}
