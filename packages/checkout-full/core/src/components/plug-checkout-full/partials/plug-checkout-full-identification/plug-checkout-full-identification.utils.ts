import { ValidationError } from 'yup'
import { cleanTextOnlyNumbers } from '@plug-checkout/utils'
import { ZipCodeAutoComplete } from './plug-checkout-full-identification.types'

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
  const normalizedIdentification = cleanTextOnlyNumbers(identification)

  if (!normalizedIdentification) return ''

  const cnpjMask = '99.999.999/9999-99'
  const cpfMask = '999.999.999-999'

  return normalizedIdentification.length > 11 ? cnpjMask : cpfMask
}

export const validAddressAutocomplete = (address: ZipCodeAutoComplete) => {
  const parsedAddress = Object.entries(address)
  const filteredAddress = parsedAddress.filter(([, value]) => value)
  const reducedAddress = filteredAddress.reduce(
    (accumulator, [field]) => ({ ...accumulator, [field]: undefined }),
    {},
  )

  return reducedAddress
}
