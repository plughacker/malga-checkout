import { Api } from '../api'

import { CustomerCardConstructor } from './customer-cards.types'

export class CustomerCards {
  readonly api: Api
  readonly customerId: string

  constructor({ api, customerId }: CustomerCardConstructor) {
    this.api = api
    this.customerId = customerId
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
