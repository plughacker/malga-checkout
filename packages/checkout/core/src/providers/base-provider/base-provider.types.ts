export interface CustomerId {
  customerId: string
}

export interface Customer {
  name?: string
  email?: string
  phoneNumber?: string
  document?: {
    type: string
    number?: string
    country?: string
  }
  address?: {
    zipCode: string
    street: string
    streetNumber: string
    complement: string
    district: string
    city: string
    state: string
    country: string
  }
}

export interface CustomerPayload {
  name: string
  email: string
  phoneNumber: string
  document?: {
    type: string
    number?: string
    country?: string
  }
  address?: {
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

export interface BaseProviderConstructor {
  customerId?: string
  customer?: Customer
}

export type CustomerMethod = CustomerId | { customer: CustomerPayload }

export interface PaymentSourceCustomerId {
  sourceType: string
  customerId: string
}

export interface PaymentSourceCustomer {
  sourceType: string
  customer: Customer
}

export type PaymentSource =
  | PaymentSourceCustomerId
  | PaymentSourceCustomer
  | unknown
