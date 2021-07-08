import { ValidationError } from 'yup'
import { PlugCheckoutFormValues } from '../../plug-checkout.types'

export const defaultCustomStyles = {
  formContainer: '',
  formContent: '',
  creditCardFieldContainer: '',
  creditCardFieldLabelContainer: '',
  creditCardFieldInputContainer: '',
  expirationDateFieldContainer: '',
  expirationDateFieldLabelContainer: '',
  expirationDateFieldInputContainer: '',
  cvvFieldContainer: '',
  cvvFieldLabelContainer: '',
  cvvFieldInputContainer: '',
  nameFieldContainer: '',
  nameFieldLabelContainer: '',
  nameFieldInputContainer: '',
  installmentsFieldContainer: '',
  installmentsFieldLabelContainer: '',
  installmentsFieldSelectContainer: '',
  submitButton: '',
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
