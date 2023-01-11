import {
  cleanTextOnlyNumbers,
  transformExpirationDate,
} from '@malga-checkout/utils'

import { CardData } from './tokens.types'

export const formatCardPayload = (card: CardData) => ({
  cardNumber: cleanTextOnlyNumbers(card.cardNumber),
  cardCvv: card.cvv,
  cardExpirationDate: transformExpirationDate(card.expirationDate),
  cardHolderName: card.name,
})

export const formatPayload = (data: CardData) => {
  const types = {
    card: formatCardPayload,
  }

  return types[data.type](data)
}
