import { ValidationError } from 'yup'

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

export const getIdentificationMask = (identification?: string) => {
  const normalizedIdentification = identification.replace(/\D/g, '').trim()

  if (!normalizedIdentification) return ''

  const cnpjMask = '99.999.999/9999-99'
  const cpfMask = '999.999.999-999'

  return normalizedIdentification.length > 11 ? cnpjMask : cpfMask
}
