import { ICustomer } from '../../providers/base-provider'
import { Api } from '../api'
import { cleanTextOnlyNumbers } from '../../utils'

import { CustomerConstructor } from './customers.types'

export class Customers {
  readonly api: Api
  readonly customer: ICustomer

  constructor({ api, customer }: CustomerConstructor) {
    this.api = api
    this.customer = customer
  }

  private formatPayload() {
    const identification = cleanTextOnlyNumbers(this.customer.identification)
    const documentType = identification.length === 11 ? 'cpf' : 'cnpj'

    return {
      name: this.customer.name,
      email: this.customer.email,
      phoneNumber: ' ',
      document: {
        type: documentType,
        number: identification,
        country: 'BR',
      },
      address: {
        country: this.customer.country,
        state: this.customer.state,
        city: this.customer.city,
        district: this.customer.neighborhood,
        zipCode: cleanTextOnlyNumbers(this.customer.zipCode),
        street: this.customer.street,
        streetNumber: this.customer.number,
        complement: this.customer.complement,
      },
    }
  }

  public async create() {
    const response = await this.api.create({
      endpoint: '/customers?force=true',
      data: this.formatPayload(),
    })

    const customerId = response.data.id

    if (!customerId) {
      return
    }

    return response.data.id
  }
}
