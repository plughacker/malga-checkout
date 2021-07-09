import * as Yup from 'yup'

import { PlugCheckoutFormValues } from '../../plug-checkout.types'
import { normalizeValidationErrors } from './plug-checkout-form.utils'

export const schema = Yup.object().shape({
  cardNumber: Yup.string()
    .required('Número do cartão é obrigatório.')
    .min(14, 'Formato inválido, verifique os dados do cartão.')
    .max(22, 'Formato inválido, verifique os dados do cartão.')
    .test(
      'isNumber',
      'Formato inválido, verifique os dados do cartão.',
      (value) => {
        if (!value.length) {
          return true
        }

        return !!parseInt(value)
      },
    ),
  expirationDate: Yup.string()
    .required('Validade é obrigatória.')
    .test(
      'isValidDate',
      'Data inválida, verifique os dados do cartão.',
      (value) => {
        const normalizedValue = value.replace(/\D/g, '').trim()

        if (!normalizedValue) return true

        const [month, year] = value.split('/')

        const parsedMonth = parseInt(month) - 1
        const parsedYear = parseInt(`20${year}`)

        const today = new Date()
        const months = Array.from({ length: 12 }).map((_, index) => index)

        const isValidMonth =
          parsedMonth >= today.getMonth() && months.includes(parsedMonth)
        const isValidYear = parsedYear >= today.getFullYear()

        return isValidMonth && isValidYear
      },
    ),
  cvv: Yup.string()
    .required('CVV é obrigatório.')
    .min(3, 'Formato inválido, verifique os dados do cartão.')
    .max(3, 'Formato inválido, verifique os dados do cartão.'),
  name: Yup.string()
    .required('Portador do cartão é obrigatório.')
    .test(
      'isValidName',
      'Formato inválido, verifique os dados do cartão.',
      (value) => {
        const normalizedValue = value.replace(/[^A-Za-z]+/g, '')
        const comparedValue = value.replace(/\s/g, '')

        return normalizedValue.length === comparedValue.length
      },
    ),
  installments: Yup.string().test(
    'isValidInstallments',
    'Selecione uma parcela para prosseguir.',
    (value, context) => {
      if (!context.options.context.hasInstallments) {
        return true
      }

      return value !== 'none'
    },
  ),
})

export const validateCheckout = async (
  data: Partial<PlugCheckoutFormValues>,
  context?: Record<string, unknown>,
) => {
  try {
    await schema.validate(data, { abortEarly: false, context })

    return { isValid: true }
  } catch (error) {
    const errors = normalizeValidationErrors(error.inner)

    return { isValid: false, errors }
  }
}
