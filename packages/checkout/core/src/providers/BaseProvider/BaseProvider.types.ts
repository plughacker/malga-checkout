export interface ICustomerId {
  customerId: string
}

export interface ICustomer {
  name: string
  email: string
  phoneNumber: string
  document: {
    type: string
    number: string
    country: string
  }
  address: {
    country: string
    state: string
    city: string
    district: string
    zipCode: string
    street: string
    streetNumber: string
    complement: string
  }
}

export interface IBaseProviderConstructor {
  customerId?: string
  customer?: ICustomer
}

export interface IProvider {
  customerId?: string
  customer?: ICustomer
  getPaymentSource(): void
}

export type ICustomerMethod = ICustomerId | { customer: ICustomer }

export interface IPaymentSourceCustomerId {
  sourceType: string
  customerId: string
}

export interface IPaymentSourceCustomer {
  sourceType: string
  customer: ICustomer
}

export type IPaymentSource =
  | IPaymentSourceCustomerId
  | IPaymentSourceCustomer
  | unknown
