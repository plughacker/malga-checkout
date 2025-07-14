import cardValidator from '@malga/card-validator'
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

export const applyCardMask = (cardNumber: string, cardMask: string) => {
  const cleanNumber = cardNumber.replace(/\D/g, '')

  if(!cardMask || cardMask.trim() === '') {
    cardMask = '9999 9999 9999 9999'
  }

  const cardValidation = cardValidator.valid.number(cleanNumber)

  let maskedNumber = ''
  let numberIndex = 0

  for (let i = 0; i < cardMask.length; i++) {
    if (cardMask[i] === '9') {
      if (numberIndex < cleanNumber.length) {
        maskedNumber += cleanNumber[numberIndex]
        numberIndex++
      } else {
        if(!cardValidation.isValid) {
          maskedNumber += '•'
        }
        maskedNumber += ' '
      }
    } else {
      maskedNumber += cardMask[i]
    }
  }

  return maskedNumber
}
