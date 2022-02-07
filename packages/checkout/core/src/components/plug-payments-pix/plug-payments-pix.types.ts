import { PixAttributes } from '../../providers/pix'

export interface PlugPaymentsPixDialogState {
  open: boolean
  mode?: 'pix' | 'boleto' | 'success' | 'error'
  amount?: number
  paymentCode?: string
  paymentImageUrl?: string
  expirationDate?: string
  expirationTime?: number
  errorTitle?: string
  errorMessage?: string
  successMessage?: string
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
  errorStack: unknown
}

export type PlugPaymentsPixPaymentSuccessCallback = (
  data: PlugPaymentsPixChargeSuccess,
) => CustomEvent<{ data: PlugPaymentsPixChargeSuccess }>

export type PlugPaymentsPixPaymentFailedCallback = (
  error: PlugPaymentsPixChargeError,
) => CustomEvent<{ error: PlugPaymentsPixChargeError }>

export type PlugPaymentsPixDialogShowCallback = (
  dialogData: PlugPaymentsPixDialogState,
) => void

export interface PlugPaymentsPixChargeRequest {
  data?: PixAttributes
  onPaymentSuccess?: PlugPaymentsPixPaymentSuccessCallback
  onPaymentFailed?: PlugPaymentsPixPaymentFailedCallback
  onShowDialog?: PlugPaymentsPixDialogShowCallback
}
