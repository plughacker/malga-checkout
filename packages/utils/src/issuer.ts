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

  if (!cardMask || cardMask.trim() === '') {
    cardMask = '9999 9999 9999 9999'
  }

  const cardValidation = cardValidator.valid.number(cleanNumber)
  const maskedNumber: string[] = []
  let currentDigitIndex = 0

  for (let maskPosition = 0; maskPosition < cardMask.length; maskPosition++) {
    const currentMaskChar = cardMask[maskPosition]

    if (currentMaskChar === '9') {
      if (currentDigitIndex < cleanNumber.length) {
        maskedNumber.push(cleanNumber[currentDigitIndex])
        currentDigitIndex++
      } else {
        if (!cardValidation.isValid) {
          maskedNumber.push('•')
        }
      }
    } else {
      maskedNumber.push(currentMaskChar)
    }
  }

  return maskedNumber.join('')
}
