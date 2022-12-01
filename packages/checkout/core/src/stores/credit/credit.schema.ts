import * as Yup from 'yup'
import Payment from 'payment'

import { t } from '@plug-checkout/i18n'
import settings from '../settings'

export const schema = Yup.object().shape({
  cardNumber: Yup.string()
    .required(
      t(
        'paymentMethods.card.newCard.fields.cardNumber.errorMessageRequired',
        settings.locale,
      ),
    )
    .min(
      14,
      t(
        'paymentMethods.card.newCard.fields.cardNumber.errorMessageInvalidFormat',
        settings.locale,
      ),
    )
    .max(
      22,
      t(
        'paymentMethods.card.newCard.fields.cardNumber.errorMessageInvalidFormat',
        settings.locale,
      ),
    )
    .test(
      'isNumber',
      t(
        'paymentMethods.card.newCard.fields.cardNumber.errorMessageInvalidFormat',
        settings.locale,
      ),
      (value) => {
        if (!value.length) {
          return true
        }

        return Payment.fns.validateCardNumber(value)
      },
    ),
  expirationDate: Yup.string()
    .required(
      t(
        'paymentMethods.card.newCard.fields.expirationDate.errorMessageRequired',
        settings.locale,
      ),
    )
    .test(
      'isValidDate',
      t(
        'paymentMethods.card.newCard.fields.expirationDate.errorMessageInvalidFormat',
        settings.locale,
      ),
      (value) => {
        const normalizedValue = value.replace(/\D/g, '').trim()

        if (!normalizedValue) return true

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
        settings.locale,
      ),
    )
    .min(
      3,
      t(
        'paymentMethods.card.newCard.fields.cvv.errorMessageInvalidFormat',
        settings.locale,
      ),
    )
    .max(
      4,
      t(
        'paymentMethods.card.newCard.fields.cvv.errorMessageInvalidFormat',
        settings.locale,
      ),
    ),
  name: Yup.string()
    .required(
      t(
        'paymentMethods.card.newCard.fields.name.errorMessageRequired',
        settings.locale,
      ),
    )
    .test(
      'isValidName',
      t(
        'paymentMethods.card.newCard.fields.name.errorMessageInvalidFormat',
        settings.locale,
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
      settings.locale,
    ),
    (value, context) => {
      if (!context.options.context.hasInstallments) {
        return true
      }

      return !!value && value !== 'none'
    },
  ),
})
