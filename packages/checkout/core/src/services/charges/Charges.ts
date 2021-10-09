import { Api } from '../api'

import {
  IProvider,
  IChargeConstructor,
  ICreateChargeData,
} from './Charges.types'

export class Charges {
  readonly api: Api
  readonly provider: IProvider

  constructor({ api, provider }: IChargeConstructor) {
    this.api = api
    this.provider = provider
  }

  public async create(data: ICreateChargeData) {
    const errorStatus = ['failed', 'charged_back', 'canceled', 'voided']

    const payload = {
      ...data,
      paymentMethod: this.provider.getPaymentMethod(),
      paymentSource: this.provider.getPaymentSource(),
    }

    const response = await this.api.create({
      endpoint: '/charges',
      data: payload,
    })

    return {
      hasError: errorStatus.includes(response.data.status),
      data: response.data,
    }
  }
}
