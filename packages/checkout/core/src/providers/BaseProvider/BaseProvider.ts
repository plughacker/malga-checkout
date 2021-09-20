import {
  IProvider,
  ICustomerMethod,
  ICustomer,
  IBaseProviderConstructor,
  IPaymentSource,
} from './BaseProvider.types'

export class BaseProvider implements IProvider {
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
      customer: this.customer,
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
