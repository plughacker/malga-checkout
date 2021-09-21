import { BaseProvider } from '../BaseProvider'

import {
  cleanTextOnlyNumbers,
  parseInstallments,
  transformExpirationDate,
} from '../../utils'

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
      installments: parseInstallments(this.card.installments),
    }
  }

  public getPaymentSource(): IPaymentSourceCard {
    return {
      sourceType: 'card',
      card: {
        cardNumber: cleanTextOnlyNumbers(this.card.cardNumber),
        cardCvv: this.card.cvv,
        cardExpirationDate: transformExpirationDate(this.card.expirationDate),
        cardHolderName: this.card.name,
      },
    }
  }
}
