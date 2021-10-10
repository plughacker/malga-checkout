import { ICustomer } from '../../providers/base-provider'
import { IPix } from '../../providers/Pix'

export interface PlugPaymentsPixChargePayload {
  pix: IPix
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

export interface PlugPaymentsPixDialogState {
  open: boolean
  mode: 'pix' | 'boleto' | 'success' | 'error'
  amount?: number
  paymentCode?: string
  paymentImageUrl?: string
  expirationDate?: string
  expirationTime?: number
  errorMessage?: string
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

export interface PlugPaymentsPixChargeRequest {
  publicKey: string
  clientId: string
  sandbox: boolean
  showDialog: boolean
  data: PlugPaymentsPixChargePayload
  onPaymentSuccess: (
    data: PlugPaymentsPixChargeSuccess,
  ) => CustomEvent<{ data }>
  onPaymentFailed: (error: PlugPaymentsPixChargeError) => CustomEvent<{ error }>
  onShowDialog: (dialogData: PlugPaymentsPixDialogState) => void
}
