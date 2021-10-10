import {
  ICustomerMethod,
  ICustomer,
  IBaseProviderConstructor,
  IPaymentSource,
} from './base-provider.types'

import { formatCustomerPayload } from './base-provider.utils'

export class BaseProvider {
  readonly customerId?: string
  readonly customer?: ICustomer

  constructor({ customerId, customer }: IBaseProviderConstructor) {
    this.customerId = customerId
    this.customer = customer
  }

  public getCustomerMethod(): ICustomerMethod {
    if (this.customerId) {
      return {
        customerId: this.customerId,
      }
    }

    return {
      customer: formatCustomerPayload(this.customer),
    }
  }

  public getPaymentSource(): IPaymentSource {
    const customer = this.getCustomerMethod()

    return {
      sourceType: 'customer',
      ...customer,
    }
  }
}
