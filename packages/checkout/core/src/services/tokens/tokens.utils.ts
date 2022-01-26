import {
  cleanTextOnlyNumbers,
  transformExpirationDate,
} from '@plug-checkout/utils'

import { CardData, Data } from './tokens.types'

export const formatCardPayload = (card: CardData) => ({
  cardNumber: cleanTextOnlyNumbers(card.cardNumber),
  cardCvv: card.cvv,
  cardExpirationDate: transformExpirationDate(card.expirationDate),
  cardHolderName: card.name,
})

export const formatPayload = (data: Data) => {
  const types = {
    card: formatCardPayload,
  }

  return types[data.type](data)
}
