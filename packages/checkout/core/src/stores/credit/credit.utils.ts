import { Locale } from '@malga-checkout/i18n/dist/utils'
import { ValidationError } from 'yup'

import settings from '../settings'

import { state as credit } from './credit'
import { schema } from './credit.schema'
import { CreditForm } from './credit.types'

export const handleSubmitValidation = async () => {
  const hasInstallments =
    settings.paymentMethods?.credit?.installments?.show ?? false

  const validation = await validateCreditForm(credit.form, {
    hasInstallments,
  })

  if (!validation.isValid) {
    credit.validations.fields = {
      ...credit.validations.fields,
      ...validation.errors,
    }

    const checkedIfAllFieldsIsBlank = checkIfAllFieldsIsBlank(credit.form)

    if (checkedIfAllFieldsIsBlank) {
      credit.validations.allFieldsIsBlank = true
    }
  }

  return validation.isValid
}

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

export const checkIfAllFieldsIsBlank = (data: CreditForm) => {
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

export const validateCreditForm = async (
  data: Partial<CreditForm>,
  context?: Record<string, unknown>,
  locale?: Locale,
) => {
  try {
    const cardSchema = schema(locale)
    await cardSchema.validate(data, { abortEarly: false, context })

    return { isValid: true }
  } catch (error) {
    const errors = normalizeValidationErrors(error.inner)

    return { isValid: false, errors }
  }
}
