import { ICustomer } from '../../providers/BaseProvider'
import { Api } from '../api'

import { CustomerConstructor } from './customers.types'

export class Customers {
  readonly api: Api
  readonly customer: ICustomer

  constructor({ api, customer }: CustomerConstructor) {
    this.api = api
    this.customer = customer
  }

  public async create() {
    const response = await this.api.create({
      endpoint: '/customers?force=true',
      data: this.customer,
    })

    const customerId = response.data.id

    if (!customerId) {
      return
    }

    return response.data.id
  }
}
