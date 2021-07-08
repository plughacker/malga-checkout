import { ValidationError } from 'yup'
import { PlugCheckoutFormValues } from '../../plug-checkout.types'

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

export const checkIfAllFieldsIsBlank = (data: PlugCheckoutFormValues) => {
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

  const parseToReal = amount / 100
  const [real, cents] = parseToReal.toString().split('.')

  const centsPossibilities = {
    0: '00',
    1: `${cents}0`,
    2: cents,
  }
  const parsedCents = centsPossibilities[cents ? cents.length : 0]

  return `R$${real},${parsedCents}`
}
