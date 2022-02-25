import { Api } from '../api'

export class CustomerCards {
  readonly api: Api

  constructor() {
    this.api = new Api()
  }

  public async create(cardId: string, customerId: string) {
    return this.api.create({
      endpoint: `/customers/${customerId}/cards`,
      data: { cardId },
    })
  }

  public async list(customerId: string) {
    const response = await this.api.fetch({
      endpoint: `/customers/${customerId}/cards`,
    })

    return {
      data: response.data,
    }
  }
}
