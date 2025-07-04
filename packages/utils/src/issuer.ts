import cardValidator from '@malga/card-validator'

export const getMaxLengthPerIssuer = (issuer: string) => {
  const maxLengthPerIssuer = {
    'american-express': 15,
    'diners-club': 16,
    hipercard: 19,
    mastercard: 19,
    visa: 19,
  }

  const maxLength = maxLengthPerIssuer[issuer] || 19

  return maxLength
}

export const getCurrentIssuer = (number: string) => {
  const parsedNumber = number.replace(/•/g, '')

  if (!parsedNumber.trim()) {
    return 'unknown'
  }

  const issuer = parsedNumber
    ? cardValidator.valid.number(parsedNumber).card.type
    : 'unknown'
  return issuer
}

export const getCardBrand = (firstCardNumbers: string): string => {
  const permittedBrands = [
    'american-express',
    'diners-club',
    'discover',
    'elo',
    'hipercard',
    'mastercard',
    'visa',
  ]

  const cardBrand = cardValidator.valid.number(firstCardNumbers).card.type
  const isPermittedBrand = permittedBrands.includes(cardBrand)

  return isPermittedBrand ? cardBrand : undefined
}
