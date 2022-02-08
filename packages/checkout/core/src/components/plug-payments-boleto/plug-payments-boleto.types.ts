import { BoletoAttributes } from '../../providers/boleto'

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
  mode?: 'pix' | 'boleto' | 'success' | 'error'
  amount?: number
  paymentCode?: string
  paymentImageUrl?: string
  expirationDate?: string
  errorMessage?: string
}

export interface PlugPaymentsBoletoChargeError {
  type: string
  message: string
  errorStack: unknown
}

export type PlugPaymentsBoletoPaymentSuccessCallback = (
  data: PlugPaymentsBoletoChargeSuccess,
) => CustomEvent<{ data: PlugPaymentsBoletoChargeSuccess }>

export type PlugPaymentsBoletoPaymentFailedCallback = (
  error: PlugPaymentsBoletoChargeError,
) => CustomEvent<{ error: PlugPaymentsBoletoChargeError }>

export type PlugPaymentsBoletoShowDialogCallback = (
  dialogData: PlugPaymentsBoletoDialogState,
) => void

export interface PlugPaymentsBoletoChargeRequest {
  data: BoletoAttributes
  onPaymentSuccess: PlugPaymentsBoletoPaymentSuccessCallback
  onPaymentFailed: PlugPaymentsBoletoPaymentFailedCallback
  onShowDialog: PlugPaymentsBoletoShowDialogCallback
}
