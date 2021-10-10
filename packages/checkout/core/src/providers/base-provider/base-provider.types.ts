export interface ICustomerId {
  customerId: string
}

export interface ICustomer {
  name: string
  email: string
  identification: string
  zipCode: string
  street: string
  number: string
  complement: string
  neighborhood: string
  city: string
  state: string
  country: string
}

export interface CustomerPayload {
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

export type ICustomerMethod = ICustomerId | { customer: CustomerPayload }

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
