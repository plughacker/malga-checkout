export interface Customer {
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

export interface BoletoAttributes {
  expiresDate: string
  instructions: string
  interest: {
    days: number
    amount?: number
    percentage?: number
  }
  fine: {
    days: number
    amount?: number
    percentage?: number
  }
}

export interface PixAttributes {
  expiresIn: number
}

export interface PlugPaymentsCreditInstallmentsConfig {
  show: boolean
  quantity: number
}

export interface PlugPaymentsBoletoChargeSuccess {
  id: string
  clientId: string
  createdAt: string
  amount: number
  statementDescriptor: string
  capture: boolean
  status: string
  currency: string
  description: string | null
  orderId: string | null
  paymentMethod: {
    paymentType: string
    barcodeData: string
    barcodeImageUrl: string
    expiresDate: string
  }
  paymentSource: {
    sourceType: string
    customerId: string
  }
  transactionRequests: {
    id: string
    updatedAt: string
    createdAt: string
    idempotencyKey: string
    requestId: string | null
    providerId: string
    amount: number
    authorizationCode: string
    authorizationNsu: string
    responseCode: string
    requestStatus: string
    requestType: string
    responseTs: string
  }[]
}

export interface PlugPaymentsBoletoChargeError {
  type: string
  message: string
}

export interface PlugPaymentsCreditChargeSuccess {
  id: string
  clientId: string
  createdAt: string
  amount: number
  statementDescriptor: string
  capture: boolean
  status: string
  paymentMethod: {
    installments: number
    paymentType: string
  }
  paymentSource: {
    sourceType: string
    cardId: string
  }
  transactionRequests: {
    id: string
    updatedAt: string
    createdAt: string
    idempotencyKey: string
    requestId: string | null
    providerId: string
    amount: number
    authorizationCode: string
    authorizationNsu: string
    responseCode: string
    requestStatus: string
    requestType: string
    responseTs: string
  }[]
}

export interface PlugPaymentsCreditChargeError {
  type: string
  message: string
  code?: number
  declined_code?: string
}

export interface PlugPaymentsPixChargeSuccess {
  id: string
  clientId: string
  createdAt: string
  amount: number
  statementDescriptor: string
  capture: boolean
  status: string
  currency: string
  description: string | null
  orderId: string | null
  paymentMethod: {
    expiresIn: number
    paymentType: string
    qrCodeData: string
    qrCodeImageUrl: string
  }
  paymentSource: {
    sourceType: string
    customerId: string
  }
  transactionRequests: {
    id: string
    updatedAt: string
    createdAt: string
    idempotencyKey: string
    requestId: string | null
    providerId: string
    amount: number
    authorizationCode: string
    authorizationNsu: string
    responseCode: string
    requestStatus: string
    requestType: string
    responseTs: string
    pix: {
      expiresIn: number
      qrCodeData: string
      qrCodeImageUrl: string
    }
  }[]
}

export interface PlugPaymentsPixChargeError {
  type: string
  message: string
}

export type PaymentMethodsType = 'card' | 'boleto' | 'pix'

export type PaymentMethods = PaymentMethodsType[]

export type PlugPaymentsChargeSuccess =
  | PlugPaymentsBoletoChargeSuccess
  | PlugPaymentsCreditChargeSuccess
  | PlugPaymentsPixChargeSuccess

export type PlugPaymentsChargeError =
  | PlugPaymentsBoletoChargeError
  | PlugPaymentsCreditChargeError
  | PlugPaymentsPixChargeError
