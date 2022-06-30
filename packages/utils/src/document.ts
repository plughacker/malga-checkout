import { stdnum } from 'stdnum'

export const validateTaxId = (
  documentCountry?: string,
  documentType?: string,
  value?: string,
) => {
  if (!stdnum[documentCountry] || !stdnum[documentCountry][documentType]) {
    return false
  }

  const { isValid } = stdnum[documentCountry][documentType].validate(value)

  return !!isValid
}
