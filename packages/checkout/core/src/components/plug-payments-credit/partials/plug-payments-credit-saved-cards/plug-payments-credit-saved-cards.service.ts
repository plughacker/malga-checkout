import { Api } from '../../../../services/api'
import { CustomerCards } from '../../../../services/customer-cards'

import settings from '../../../../stores/settings'
import savedCards from '../../../../stores/saved-cards'

export class PlugPaymentsCreditSavedCardsService {
  readonly customerCards: CustomerCards

  constructor() {
    this.customerCards = new CustomerCards({
      api: new Api(settings.clientId, settings.publicKey, settings.sandbox),
      customerId: settings.transactionConfig.customerId,
    })
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
