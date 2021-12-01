import { ValidationError } from 'yup'
import { formatToReal } from '@plug-checkout/utils'
import { PlugPaymentsCreditFormValues } from '../../plug-payments-credit.types'

export const normalizeValidationErrors = (errors: ValidationError[]) => {
  const normalizedErrors = errors.reduce(
    (accumulatorErrors, currentError) => ({
      ...accumulatorErrors,
      [currentError.path]: currentError.message,
    }),
    {},
  )

  return normalizedErrors
}

export const checkIfAllFieldsIsBlank = (data: PlugPaymentsCreditFormValues) => {
  const fields = Object.entries(data)

  const filteredBlankFieldValues = fields
    .map(([field, value]) => {
      const isMaskedField = ['expirationDate', 'cvv'].includes(field)
      const normalizedValue = field.replace(/\D/g, '').trim()

      return isMaskedField ? normalizedValue : value
    })
    .filter((field) => !field || field === 'none')

  return fields.length === filteredBlankFieldValues.length
}

export const centsToReal = (amount: number) => {
  if (!amount) {
    return 'R$00,00'
  }

  return formatToReal(amount)
}
