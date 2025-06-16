import * as Yup from 'yup'

import cardValidator from '@malga/card-validator'

import { t } from '@malga-checkout/i18n'
import { Locale } from '@malga-checkout/i18n/dist/utils'

export const schema = (locale?: Locale) => {
  return Yup.object().shape({
    cardNumber: Yup.string()
      .required(
        t(
          'paymentMethods.card.newCard.fields.cardNumber.errorMessageRequired',
          locale,
        ),
      )
      .min(
        14,
        t(
          'paymentMethods.card.newCard.fields.cardNumber.errorMessageMin',
          locale,
        ),
      )
      .max(
        22,
        t(
          'paymentMethods.card.newCard.fields.cardNumber.errorMessageInvalidFormat',
          locale,
        ),
      )
      .test(
        'isNumber',
        t(
          'paymentMethods.card.newCard.fields.cardNumber.errorMessageInvalidFormat',
          locale,
        ),
        (value) => {
          if (!value.length ||  value.length < 14) {
            return true
          }

          return cardValidator.valid.number(value).isValid
        },
      ),
    expirationDate: Yup.string()
      .required(
        t(
          'paymentMethods.card.newCard.fields.expirationDate.errorMessageRequired',
          locale,
        ),
      )
      .test('isMinDate', t(
          'paymentMethods.card.newCard.fields.expirationDate.errorMessageMin',
          locale,
        ), (value) => {
           const normalizedValue = value.replace(/\D/g, '').trim()
           const lengthDate = normalizedValue.length


           return lengthDate === 4
        })
        .test(
        'isValidDate',
        t(
          'paymentMethods.card.newCard.fields.expirationDate.errorMessageInvalidFormat',
          locale,
        ),
        (value) => {
          const normalizedValue = value.replace(/\D/g, '').trim()

          if (!normalizedValue || normalizedValue.length < 4) return true

          const [month, year] = value.split('/')

          const parsedMonth = parseInt(month) - 1
          const parsedYear = parseInt(`20${year}`)

          const today = new Date()
          const months = Array.from({ length: 12 }).map((_, index) => index)

          const isValidMonthOfCurrentYear =
            parsedMonth >= today.getMonth() && months.includes(parsedMonth)
          const isValidMonth =
            parsedYear === today.getFullYear()
              ? isValidMonthOfCurrentYear
              : months.includes(parsedMonth)
          const isValidYear = parsedYear >= today.getFullYear()

          return isValidMonth && isValidYear
        },
      ),
    cvv: Yup.string()
      .required(
        t(
          'paymentMethods.card.newCard.fields.cvv.errorMessageRequired',
          locale,
        ),
      )
      .min(
        3,
        t('paymentMethods.card.newCard.fields.cvv.errorMessageMin', locale),
      )
      .max(
        4,
        t(
          'paymentMethods.card.newCard.fields.cvv.errorMessageInvalidFormat',
          locale,
        ),
      ),
    name: Yup.string()
      .required(
        t(
          'paymentMethods.card.newCard.fields.name.errorMessageRequired',
          locale,
        ),
      )
      .test(
        'isValidName',
        t(
          'paymentMethods.card.newCard.fields.name.errorMessageInvalidFormat',
          locale,
        ),
        (value) => {
          const normalizedValue = value.replace(/[^A-Za-z]+/g, '')
          const comparedValue = value.replace(/\s/g, '')

          return normalizedValue.length === comparedValue.length
        },
      ),
    installments: Yup.string().test(
      'isValidInstallments',
      t(
        'paymentMethods.card.newCard.fields.installments.errorMessageRequired',
        locale,
      ),
      (value, context) => {
        if (!context.options.context.hasInstallments) {
          return true
        }

        return !!value && value !== 'none'
      },
    ),
  })
}
