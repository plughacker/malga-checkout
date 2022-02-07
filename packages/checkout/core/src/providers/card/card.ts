import { BaseProvider } from '../base-provider'

import { parseInstallments } from '@plug-checkout/utils'

import {
  CardForm,
  CardTokenized,
  CardAttributes,
  PaymentSourceCard,
  PaymentMethodCard,
} from './card.types'

import {
  handleAlreadyTokenizedCard,
  handleTokenizationFlow,
} from './card.utils'

export class Card extends BaseProvider {
  readonly card: CardAttributes

  constructor({ card }) {
    super({ customer: null, customerId: null })
    this.card = card
  }

  public getPaymentMethod(): PaymentMethodCard {
    return {
      paymentType: 'credit',
      installments: parseInstallments(
        this.card['installments' as keyof CardForm],
      ),
    }
  }

  public async getPaymentSource(): Promise<PaymentSourceCard> {
    if (
      this.card['cardCvv' as keyof CardTokenized] &&
      this.card['cardId' as keyof CardTokenized]
    ) {
      return handleAlreadyTokenizedCard(this.card)
    }

    return await handleTokenizationFlow(this.card)
  }
}
