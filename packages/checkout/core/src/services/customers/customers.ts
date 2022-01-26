import { Customer } from '../../providers/base-provider'
import { Api } from '../api'

import { CustomerConstructor } from './customers.types'
import { formatPayload } from './customers.utils'

export class Customers {
  readonly api: Api
  readonly customer: Customer

  constructor({ api, customer }: CustomerConstructor) {
    this.api = api
    this.customer = customer
  }

  public async create() {
    const response = await this.api.create({
      endpoint: '/customers?force=true',
      data: formatPayload(this.customer),
    })

    const customerId = response.data.id

    if (!customerId) {
      return
    }

    return response.data.id
  }
}
