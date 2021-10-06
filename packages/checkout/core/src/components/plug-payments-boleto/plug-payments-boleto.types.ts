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

export interface PlugPaymentsBoletoDialogState {
  open: boolean
  mode: 'pix' | 'boleto' | 'success' | 'error'
  amount?: number
  paymentCode?: string
  paymentImageUrl?: string
  expirationDate?: string
  errorMessage?: string
}

export interface PlugPaymentsBoletoChargeError {
  type: string
  message: string
}

export interface PlugPaymentsBoletoChargeRequest {
  publicKey: string
  clientId: string
  sandbox: boolean
  showDialog: boolean
  data: PlugPaymentsBoletoChargePayload
  onPaymentSuccess: (
    data: PlugPaymentsBoletoChargeSuccess,
  ) => CustomEvent<{ data }>
  onPaymentFailed: (
    error: PlugPaymentsBoletoChargeError,
  ) => CustomEvent<{ error }>
  onShowDialog: (dialogData: PlugPaymentsBoletoDialogState) => void
}
