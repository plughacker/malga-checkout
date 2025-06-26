import { ValidationError } from 'yup'
import { cleanTextOnlyNumbers } from '@malga-checkout/utils'
import { ZipCodeAutoComplete } from './malga-checkout-full-identification.types'
import { t } from '@malga-checkout/i18n'
import { Locale } from '@malga-checkout/i18n/dist/utils'
import { isCNPJ, isCPF } from 'brazilian-values'

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

export const getIdentificationMask = (isBrazilianDocument: boolean, documentType?: string, identification?: string) => {
  const normalizedIdentification = cleanTextOnlyNumbers(identification)

  if (!normalizedIdentification || !isBrazilianDocument) return ''

  const cnpjMask = '99.999.999/9999-99'
  const cpfMask = '999.999.999-99'

  return documentType === 'cnpj' || normalizedIdentification.length > 11 ? cnpjMask : cpfMask
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

export const handleCpfOrCnpjInvalidMessage = (
  number: string,
  locale: Locale,
  documentType?: string,
) => {
  const cleaned = cleanTextOnlyNumbers(number)

  if (cleaned.length < 11) {
    return t(
      'page.customer.fields.identification.errorInvalidNationalDocument',
      locale,
    )
  }

  if (documentType) {
    if (documentType === 'cpf') {
      if (cleaned.length !== 11) {
        return t(
          'page.customer.fields.identification.errorMessageInvalidCpf',
          locale,
        )
      }
      if (!isCPF(cleaned)) {
        return t(
          'page.customer.fields.identification.errorMessageInvalidCpf',
          locale,
        )
      }
      return ''
    }

    if (documentType === 'cnpj') {
      if (cleaned.length !== 14) {
        return t(
          'page.customer.fields.identification.errorMessageInvalidCnpj',
          locale,
        )
      }
      if (!isCNPJ(cleaned)) {
        return t(
          'page.customer.fields.identification.errorMessageInvalidCnpj',
          locale,
        )
      }
      return ''
    }
  }

  if (cleaned.length === 11) {
    if (!isCPF(cleaned)) {
      return t(
        'page.customer.fields.identification.errorMessageInvalidCpf',
        locale,
      )
    }
    return ''
  }

  if (cleaned.length === 14) {
    if (!isCNPJ(cleaned)) {
      return t(
        'page.customer.fields.identification.errorMessageInvalidCnpj',
        locale,
      )
    }
    return ''
  }

  return t(
    'page.customer.fields.identification.errorInvalidNationalDocument',
    locale,
  )
}
