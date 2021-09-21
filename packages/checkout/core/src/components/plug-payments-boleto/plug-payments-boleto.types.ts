import { ICustomer } from '../../providers/BaseProvider'
import { IBoleto } from '../../providers/Boleto'

export interface PlugPaymentsBoletoChargePayload {
  boleto: IBoleto
  merchantId: string
  amount: number
  statementDescriptor: string
  capture: boolean
  orderId: string
  description: string
  customerId: string
  customer: ICustomer
  currency: string
}

export interface PlugPaymentsBoletoChargeSuccess {
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
    pix: null
  }[]
}

export interface PlugPaymentsBoletoChargeError {
  type: string
  message: string
}

export interface PlugPaymentsBoletoChargeRequest {
  publicKey: string
  clientId: string
  sandbox: boolean
  onPaymentSuccess: (
    data: PlugPaymentsBoletoChargeSuccess,
  ) => CustomEvent<{ data }>
  onPaymentFailed: (
    error: PlugPaymentsBoletoChargeError,
  ) => CustomEvent<{ error }>
  data: PlugPaymentsBoletoChargePayload
}
