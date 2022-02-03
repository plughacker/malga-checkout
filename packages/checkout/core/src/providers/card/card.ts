import { BaseProvider } from '../base-provider'

import {
  cleanTextOnlyNumbers,
  parseInstallments,
  transformExpirationDate,
} from '@plug-checkout/utils'

import {
  CardAttributes,
  PaymentSourceCard,
  PaymentMethodCard,
} from './card.types'

export class Card extends BaseProvider {
  readonly card: CardAttributes

  constructor({ card }) {
    super({ customer: null, customerId: null })
    this.card = card
  }

  public getPaymentMethod(): PaymentMethodCard {
    return {
      paymentType: 'credit',
      installments: parseInstallments(this.card.installments),
    }
  }

  public getPaymentSource(): PaymentSourceCard {
    return {
      sourceType: 'card',
      card: {
        cardNumber: cleanTextOnlyNumbers(this.card.cardNumber),
        cardCvv: this.card.cvv.trim(),
        cardExpirationDate: transformExpirationDate(this.card.expirationDate),
        cardHolderName: this.card.name,
      },
    }
  }
}
