import * as Yup from 'yup'
import ct from 'countries-and-timezones'
import { isCPFOrCNPJ } from 'brazilian-values'
import { validateTaxId } from '@plug-checkout/utils'

import { PhoneNumberUtil } from 'google-libphonenumber'

import { PlugCheckoutFullIdentificationFormValues } from './plug-checkout-full-identification.types'
import { normalizeValidationErrors } from './plug-checkout-full-identification.utils'
import { Locale } from '@plug-checkout/i18n/dist/utils'
import { t } from '@plug-checkout/i18n'

const phoneUtil = PhoneNumberUtil.getInstance()

export const schema = (locale?: Locale) => {
  return Yup.object().shape({
    name: Yup.string().required(
      t('page.customer.fields.name.errorMessageRequired', locale),
    ),
    email: Yup.string()
      .email(t('page.customer.fields.email.errorMessageInvalidFormat', locale))
      .required(t('page.customer.fields.email.errorMessageRequired', locale)),
    phoneNumber: Yup.string()
      .test(
        'isValidPhoneNumber',
        t('page.customer.fields.phoneNumber.errorMessageInvalidFormat', locale),
        (value, context) => {
          try {
            const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
            const { countries } = ct.getTimezone(timezone)
            const country = context.parent.country || countries[0] || 'BR'
            const phoneNumber = phoneUtil.parseAndKeepRawInput(value, country)

            if (!phoneUtil.isPossibleNumber(phoneNumber)) return false

            const isValidPhone = phoneUtil.isValidNumberForRegion(
              phoneNumber,
              country,
            )

            return !!isValidPhone
          } catch (err) {
            return false
          }
        },
      )
      .required(
        t('page.customer.fields.phoneNumber.errorMessageRequired', locale),
      ),
    documentType: Yup.string().when(['$currency'], {
      is: (currency: string) => currency !== 'BRL',
      then: Yup.string().test(
        'isValidDocumentType',
        t('page.customer.fields.documentType.errorMessageRequired', locale),
        (value) => value !== 'none',
      ),
    }),
    documentCountry: Yup.string().when(['$currency'], {
      is: (currency: string) => currency !== 'BRL',
      then: Yup.string().test(
        'isValidDocumentCountry',
        t('page.customer.fields.documentCountry.errorMessageRequired', locale),
        (value) => value !== 'none',
      ),
    }),
    identification: Yup.string()
      .when(['$currency'], {
        is: (currency: string) => currency === 'BRL',
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
            (value) => isCPFOrCNPJ(value),
          ),
      })
      .when(['$currency'], {
        is: (currency: string) => currency !== 'BRL',
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

              const isValid = validateTaxId(
                context.parent.documentCountry,
                context.parent.documentType,
                value,
              )

              return isValid
            },
          ),
      }),
    street: Yup.string().required(
      t('page.customer.fields.street.errorMessageRequired', locale),
    ),
    number: Yup.string().required(
      t('page.customer.fields.number.errorMessageRequired', locale),
    ),
    complement: Yup.string().required(
      t('page.customer.fields.complement.errorMessageRequired', locale),
    ),
    neighborhood: Yup.string().required(
      t('page.customer.fields.neighborhood.errorMessageRequired', locale),
    ),
    city: Yup.string().required(
      t('page.customer.fields.city.errorMessageRequired', locale),
    ),
    state: Yup.string().required(
      t('page.customer.fields.state.errorMessageRequired', locale),
    ),
    zipCode: Yup.string()
      .when(['$currency'], {
        is: (currency: string) => currency === 'BRL',
        then: Yup.string().required(
          t('page.customer.fields.zipCode.errorMessageRequiredBrazil', locale),
        ),
      })
      .when(['$currency'], {
        is: (currency: string) => currency !== 'BRL',
        then: Yup.string().required(
          t(
            'page.customer.fields.zipCode.errorMessageRequiredInternational',
            locale,
          ),
        ),
      }),
    country: Yup.string().test(
      'isValidCountry',
      t('page.customer.fields.country.errorMessageRequired', locale),
      (value) => value !== 'none',
    ),
  })
}

export const validateCustomer = async (
  data: Partial<PlugCheckoutFullIdentificationFormValues>,
  context?: Record<string, unknown>,
  locale?: Locale,
) => {
  try {
    const customerSchema = schema(locale)
    await customerSchema.validate(data, { abortEarly: false, context })

    return { isValid: true }
  } catch (error) {
    const errors = normalizeValidationErrors(error.inner)

    return { isValid: false, errors }
  }
}
