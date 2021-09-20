import { BaseProvider } from '../BaseProvider'

import { ICard, IPaymentSourceCard, IPaymentMethodCard } from './Card.types'

export class Card extends BaseProvider {
  readonly card: ICard

  constructor({ card }) {
    super({ customer: null, customerId: null })
    this.card = card
  }

  public getPaymentMethod(): IPaymentMethodCard {
    return {
      paymentType: 'credit',
      installments: this.card.installments,
    }
  }

  public getPaymentSource(): IPaymentSourceCard {
    return {
      sourceType: 'card',
      card: {
        cardNumber: this.card.cardNumber,
        cardCvv: this.card.cvv,
        cardExpirationDate: this.card.expirationDate,
        cardHolderName: this.card.name,
      },
    }
  }
}
