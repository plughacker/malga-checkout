import {
  cleanTextOnlyNumbers,
  transformExpirationDate,
} from '@plug-checkout/utils'

import { CardData } from './tokens.types'

export const formatCardPayload = (card: CardData) => ({
  cardNumber: cleanTextOnlyNumbers(card.cardNumber),
  cardCvv: card.cvv,
  cardExpirationDate: transformExpirationDate(card.expirationDate),
  cardHolderName: card.name,
})
