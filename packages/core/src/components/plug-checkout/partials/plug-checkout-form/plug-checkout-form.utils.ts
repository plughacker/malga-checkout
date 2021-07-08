import { ValidationError } from 'yup'

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
