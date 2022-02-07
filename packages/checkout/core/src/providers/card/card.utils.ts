import { Tokens } from '../../services/tokens'
import { Cards } from '../../services/cards'

import {
  CardForm,
  CardTokenized,
  CardAttributes,
  PaymentSourceCard,
} from './card.types'

const createToken = async (data): Promise<string> => {
  const tokenService = new Tokens({ data })
  return tokenService.create()
}

const createCard = async (tokenId): Promise<string> => {
  const cardService = new Cards({ tokenId })
  return cardService.create()
}

export const handleAlreadyTokenizedCard = (
  card: CardAttributes,
): PaymentSourceCard => {
  const cardCvv = card['cardCvv' as keyof CardTokenized].trim()

  return {
    sourceType: 'card',
    cardId: card['cardId' as keyof CardTokenized],
    cardCvv,
  }
}

export const handleTokenizationFlow = async (
  card: CardAttributes,
): Promise<PaymentSourceCard> => {
  const cvv = card['cvv' as keyof CardForm].trim()
  const tokenId = await createToken({ ...card, cvv, type: 'card' })
  const cardId = await createCard(tokenId)

  return {
    sourceType: 'card',
    cardCvv: cvv,
    cardId,
  }
}
