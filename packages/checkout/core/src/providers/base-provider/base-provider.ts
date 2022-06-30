import {
  CustomerMethod,
  Customer,
  BaseProviderConstructor,
  PaymentSource,
} from './base-provider.types'

import { formatCustomerPayload } from './base-provider.utils'

export class BaseProvider {
  readonly customerId?: string
  readonly customer?: Customer
  readonly currency: string

  constructor({ customerId, customer }: BaseProviderConstructor) {
    this.customerId = customerId
    this.customer = customer
  }

  public getCustomerMethod(): CustomerMethod {
    if (this.customerId) {
      return {
        customerId: this.customerId,
      }
    }

    return {
      customer: formatCustomerPayload(this.customer),
    }
  }

  public getPaymentSource(): PaymentSource {
    const customer = this.getCustomerMethod()

    return {
      sourceType: 'customer',
      ...customer,
    }
  }
}
