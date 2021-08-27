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

export const getCurrentMaskPerIssuer = (number: string) => {
  const issuer = getCurrentIssuer(number.trim())

  const masks = {
    amex: '9999 999999 99999',
    dinersclub: '9999 9999 9999 9999',
    hipercard: '9999 9999 9999 9999',
    mastercard: '9999 9999 9999 9999',
    visa: '9999 9999 9999 9999',
    unknow: '9999 9999 9999 9999',
  }

  return masks[issuer] || masks.unknow
}
