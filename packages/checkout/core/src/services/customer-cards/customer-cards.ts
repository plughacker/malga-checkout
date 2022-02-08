import { Api } from '../api'

import settings from '../../stores/settings'

export class CustomerCards {
  readonly api: Api
  readonly customerId: string

  constructor() {
    this.api = new Api()
    this.customerId = settings.transactionConfig.customerId
  }

  public async create(cardId: string) {
    return this.api.create({
      endpoint: `/customers/${this.customerId}/cards`,
      data: { cardId },
    })
  }

  public async list() {
    const response = await this.api.fetch({
      endpoint: `/customers/${this.customerId}/cards`,
    })

    return {
      data: response.data,
    }
  }
}
