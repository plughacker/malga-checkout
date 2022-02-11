import Payment from 'payment'

export const getMaxLengthPerIssuer = (issuer: string) => {
  const maxLengthPerIssuer = {
    amex: 15,
    dinersclub: 16,
    hipercard: 19,
    mastercard: 19,
    visa: 19,
  }

  const maxLength = maxLengthPerIssuer[issuer] || 19

  return maxLength
}

export const getCurrentIssuer = (number: string) => {
  const issuer = Payment.fns.cardType(number) || 'unknown'

  return issuer
}

export const getCardBrand = (firstCardNumbers: string): string => {
  const permittedBrands = [
    'amex',
    'dinersclub',
    'discover',
    'elo',
    'hipercard',
    'mastercard',
    'visa',
  ]

  const cardBrand = Payment.fns.cardType(firstCardNumbers)
  const isPermittedBrand = permittedBrands.includes(cardBrand)

  return isPermittedBrand ? cardBrand : undefined
}
