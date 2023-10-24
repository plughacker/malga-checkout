import valid from '@plughacker/nodejs-packages-card-validator'

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
  console.log('valid.number(number).card.type', valid.number(number).card.type)

  const issuer = valid.number(number).card.type || 'unknown'
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

  const cardBrand = valid.number(firstCardNumbers).card.type
  const isPermittedBrand = permittedBrands.includes(cardBrand)

  return isPermittedBrand ? cardBrand : undefined
}
