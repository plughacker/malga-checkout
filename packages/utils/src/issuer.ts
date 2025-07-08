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

export const getCurrentIssuer = (number: string) => {
  if (!number || number.trim() === '') {
    return 'unknown'
  }

  const parsedNumber = number.replace(/•/g, '')

  if (!parsedNumber.trim()) {
    return 'unknown'
  }

  const { card } = cardValidator.valid.number(parsedNumber.trim())

  return card.type || 'unknown'
}

export const applyCardMask = (cardNumber: string, cardMask: string) => {
  const cleanNumber = cardNumber.replace(/\D/g, '')

  if (!cleanNumber) {
    return cardMask.replace(/9/g, '•')
  }

  const cardValidation = cardValidator.valid.number(cleanNumber)
  const isComplete = cardValidation.isValid && cleanNumber.length >= cardValidation.card.lengths[0]


  let maskedNumber = ''
  let numberIndex = 0

  for (let i = 0; i < cardMask.length; i++) {
    if (cardMask[i] === '9') {
      if (numberIndex < cleanNumber.length) {
        maskedNumber += cleanNumber[numberIndex]
        numberIndex++
      } else if (!isComplete) {
        maskedNumber += '•'
      } else {
        maskedNumber += ' '
      }
    } else {
      maskedNumber += cardMask[i]
    }
  }

  return maskedNumber
}
