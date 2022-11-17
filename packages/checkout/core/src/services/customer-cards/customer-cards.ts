import settings from '../../stores/settings'
import { Api } from '../api'

export class CustomerCards {
  readonly api: Api
  readonly endpoint: string

  constructor() {
    this.api = new Api()
    this.endpoint = settings.sessionId ? '/sessions/customers' : '/customers'
  }

  public async create(cardId: string, customerId: string) {
    return this.api.create({
      endpoint: `${this.endpoint}/${customerId}/cards`,
      data: { cardId },
    })
  }

  public async list(customerId: string) {
    const response = await this.api.fetch({
      endpoint: `${this.endpoint}/${customerId}/cards`,
    })

    return {
      data: response.data,
    }
  }
}
