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
      .test(
        'isMin',
        t(
          'paymentMethods.card.newCard.fields.cardNumber.errorMessageMin',
          locale,
        ),
        (value) => {
          if (!value) return true

          return value.length >= 14
        },
      )
      .test(
        'isMax',
        t(
          'paymentMethods.card.newCard.fields.cardNumber.errorMessageInvalidFormat',
          locale,
        ),
        (value) => {
          if (!value) return true

          return value.length <= 22
        },
      )
      .test(
        'isNumber',
        t(
          'paymentMethods.card.newCard.fields.cardNumber.errorMessageInvalidFormat',
          locale,
        ),
        (value) => {
          if (!value.length || value.length < 14) {
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
      .test(
        'invalidMonth',
        t(
          'paymentMethods.card.newCard.fields.expirationDate.errorMessageMonthInvalid',
          locale,
        ),
        (value) => {
          if (!value) return true

          const month = value.slice(0, 2)
          const parsedMonth = parseInt(month, 10)

          return parsedMonth >= 1 && parsedMonth <= 12
        },
      )
      .test(
        'isMinDate',
        t(
          'paymentMethods.card.newCard.fields.expirationDate.errorMessageMin',
          locale,
        ),
        (value) => {
          const normalizedValue = value.replace(/\D/g, '').trim()
          const lengthDate = normalizedValue.length

          if (!lengthDate) return true

          return lengthDate > 1 && lengthDate <= 4
        },
      )
      .test(
        'isValidDate',
        t(
          'paymentMethods.card.newCard.fields.expirationDate.errorMessageInvalidFormat',
          locale,
        ),
        (value) => {
          const normalizedValue = value.replace(/\D/g, '').trim()

          const monthParsed = parseInt(value.slice(0, 2), 10)

          if (
            !normalizedValue.length ||
            normalizedValue.length < 4 ||
            monthParsed < 1 ||
            monthParsed > 12
          )
            return true

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
      .test(
        'isMin',
        t('paymentMethods.card.newCard.fields.cvv.errorMessageMin', locale),
        (value) => {
          if (!value) return true

          return value.length >= 3
        },
      )
      .test(
        'isMax',
        t(
          'paymentMethods.card.newCard.fields.cvv.errorMessageInvalidFormat',
          locale,
        ),
        (value) => {
          if (!value) return true

          return value.length <= 4
        },
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
    installments: Yup.string().when('$hasInstallments', {
      is: (hasInstallments: boolean) => hasInstallments,
      then: Yup.string()
        .required(
          t(
            'paymentMethods.card.newCard.fields.installments.errorMessageRequired',
            locale,
          ),
        )
        .min(1),
    }),
  })
}
