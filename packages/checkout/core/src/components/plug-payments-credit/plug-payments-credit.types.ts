import { Customer } from '../../providers/base-provider'

export interface PlugPaymentsCreditDialogState {
  open: boolean
  mode?: 'pix' | 'boleto' | 'success' | 'error'
  amount?: number
  errorMessage?: string
}

export interface PlugPaymentsCreditFormValues {
  cardNumber: string
  expirationDate: string
  cvv: string
  name: string
  installments: string
}

export interface PlugPaymentsCreditChargePayload {
  card: PlugPaymentsCreditFormValues
  merchantId: string
  amount: number
  statementDescriptor: string
  capture: boolean
  orderId: string
  description: string
  customerId?: string
  customer?: Customer
  currency: string
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
  declinedCode?: string
  errorStack: unknown
}

export interface PlugPaymentsCreditChargeRequest {
  publicKey: string
  clientId: string
  sandbox: boolean
  showDialog: boolean
  data: PlugPaymentsCreditChargePayload
  onPaymentSuccess: (
    data: PlugPaymentsCreditChargeSuccess,
  ) => CustomEvent<{ data }>
  onPaymentFailed: (
    error: PlugPaymentsCreditChargeError,
  ) => CustomEvent<{ error }>
  onShowDialog: (dialogData: PlugPaymentsCreditDialogState) => void
}
