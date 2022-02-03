import { BaseProvider } from '../base-provider'

import { parseInstallments } from '@plug-checkout/utils'

import { Api } from '../../services/api'

import {
  CardAttributes,
  PaymentSourceCard,
  PaymentMethodCard,
} from './card.types'

import { createToken, createCard } from './card.utils'

export class Card extends BaseProvider {
  readonly card: CardAttributes
  readonly api: Api

  constructor({ card, clientId, publicKey, sandbox }) {
    super({ customer: null, customerId: null })
    this.card = card
    this.api = new Api(clientId, publicKey, sandbox)
  }

  public getPaymentMethod(): PaymentMethodCard {
    return {
      paymentType: 'credit',
      installments: parseInstallments(this.card.installments),
    }
  }

  public async getPaymentSource(): Promise<PaymentSourceCard> {
    const cvv = this.card.cvv.trim()
    const tokenId = await createToken(this.api, {
      ...this.card,
      type: 'card',
      cvv,
    })
    console.log(tokenId)
    const cardId = await createCard(this.api, tokenId)

    return {
      sourceType: 'card',
      cardId,
      cardCvv: cvv,
    }
  }
}
