import * as Yup from 'yup'
import { isCPFOrCNPJ } from 'brazilian-values'
import {
  validateTaxId,
  cleanTextOnlyNumbers,
  cleanTextSpecialCharacters,
  isZipCodeValid,
} from '@malga-checkout/utils'

import { MalgaCheckoutFullIdentificationFormValues } from './malga-checkout-full-identification.types'
import { normalizeValidationErrors } from './malga-checkout-full-identification.utils'
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
          .test(
            'isValidIdentification',
            t(
              'page.customer.fields.identification.errorMessageInvalidFormatBrazil',
              locale,
            ),
            (value) => isCPFOrCNPJ(cleanTextOnlyNumbers(value)),
          ),
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
          .test(
            'isValidIdentification',
            t(
              'page.customer.fields.identification.errorMessageInvalidFormatInternational',
              locale,
            ),
            (value, context) => {
              if (context.parent.documentType === 'other') {
                return true
              }
              const documentNumber = cleanTextSpecialCharacters(value)

              const isValid = validateTaxId(
                context.parent.documentCountry,
                context.parent.documentType,
                documentNumber,
              )

              return isValid
            },
          ),
      }),
    street: Yup.string().optional(),
    streetNumber: Yup.string().optional(),
    complement: Yup.string().optional(),
    district: Yup.string().optional(),
    city: Yup.string().optional(),
    state: Yup.string().optional(),
    country: Yup.string().optional(),
    zipCode: Yup.string()
      .trim()
      .when(['$internationalCustomer'], {
        is: (internationalCustomer: boolean) => !internationalCustomer,
        then: Yup.string()
          .transform((value) => cleanTextOnlyNumbers(value))
          .optional(),
      })
      .when(['$internationalCustomer'], {
        is: (internationalCustomer: boolean) => internationalCustomer,
        then: Yup.string()
          .transform((value) => cleanTextSpecialCharacters(value))
          .optional(),
      })
      .test(
        'isValidZipcode',
        t(
          'page.customer.fields.zipCode.errorMessageInvalidZipCodeFormat',
          locale,
        ),
        (value, context) => {
          if (value.length === 0) return true

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
