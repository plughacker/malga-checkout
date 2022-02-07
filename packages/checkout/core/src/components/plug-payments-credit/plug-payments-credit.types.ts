export interface PlugPaymentsCreditDialogState {
  open: boolean
  mode?: 'pix' | 'boleto' | 'success' | 'error'
  amount?: number
  errorMessage?: string
}

export interface PlugPaymentsCreditTokenizedCard {
  cardId: string
  cardCvv: string
}

export interface PlugPaymentsCreditManualCard {
  cardNumber: string
  expirationDate: string
  cvv: string
  name: string
  installments: string
  saveCard: boolean
}

export type PlugPaymentsCreditFormValues =
  | PlugPaymentsCreditTokenizedCard
  | PlugPaymentsCreditManualCard

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

export type PlugPaymentsCreditPaymentSuccessCallback = (
  data: PlugPaymentsCreditChargeSuccess,
) => CustomEvent<{ data: PlugPaymentsCreditChargeSuccess }>

export type PlugPaymentsCreditPaymentFailedCallback = (
  error: PlugPaymentsCreditChargeError,
) => CustomEvent<{ error: PlugPaymentsCreditChargeError }>

export type PlugPaymentsCreditShowDialogCallback = (
  dialogData: PlugPaymentsCreditDialogState,
) => void

export interface PlugPaymentsCreditChargeRequest {
  data: PlugPaymentsCreditFormValues
  onPaymentSuccess: PlugPaymentsCreditPaymentSuccessCallback
  onPaymentFailed: PlugPaymentsCreditPaymentFailedCallback
  onShowDialog: PlugPaymentsCreditShowDialogCallback
}
