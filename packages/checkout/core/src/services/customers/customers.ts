import { Customer } from '../../providers/base-provider'
import { Api } from '../api'
import { cleanTextOnlyNumbers } from '@plug-checkout/utils'

import { CustomerConstructor } from './customers.types'
import { formatCustomerAddress } from './customers.utils'

export class Customers {
  readonly api: Api
  readonly customer: Customer

  constructor({ api, customer }: CustomerConstructor) {
    this.api = api
    this.customer = customer
  }

  private formatPayload() {
    const identification = cleanTextOnlyNumbers(this.customer.identification)
    const documentType = identification.length === 11 ? 'cpf' : 'cnpj'
    const address = formatCustomerAddress(this.customer.address)
    const phoneNumber = this.customer.phoneNumber
      ? cleanTextOnlyNumbers(this.customer.phoneNumber)
      : ' '

    return {
      ...address,
      name: this.customer.name,
      email: this.customer.email,
      phoneNumber,
      document: {
        type: documentType,
        number: identification,
        country: 'BR',
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
