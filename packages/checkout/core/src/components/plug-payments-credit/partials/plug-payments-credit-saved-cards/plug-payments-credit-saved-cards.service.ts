import { CustomerCards } from '../../../../services/customer-cards'

import savedCards from '../../../../stores/saved-cards'

export class PlugPaymentsCreditSavedCardsService {
  readonly customerCards: CustomerCards

  constructor() {
    this.customerCards = new CustomerCards()
  }

  public async listSavedCards() {
    try {
      const cards = await this.customerCards.list()

      savedCards.cards = cards.data
    } catch (err) {
      savedCards.cards = []
    }
  }
}
