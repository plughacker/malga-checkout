import { Customer } from '../../providers/base-provider'
import { Api } from '../api'

import { formatPayload } from './customers.utils'

import settings from '../../stores/settings'

export class Customers {
  readonly api: Api
  readonly customer: Customer

  constructor() {
    this.api = new Api()
    this.customer = settings.transactionConfig.customer
  }

  public async create() {
    const response = await this.api.create({
      endpoint: settings.sessionId
        ? '/sessions/customers?force=true'
        : '/customers?force=true',
      data: formatPayload(this.customer),
    })

    const customerId = response.data.id

    if (!customerId) {
      return
    }

    return response.data.id
  }

  public async find(customerId: string) {
    const endpoint = settings.sessionId ? '/sessions/customers' : '/customers'

    return this.api.fetch({ endpoint: `${endpoint}/${customerId}` })
  }
}
