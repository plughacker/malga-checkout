export interface PlugPaymentsCreditFormCustomStyleFormClasses {
  formContainer?: string
  formContent?: string
  creditCardFieldContainer?: string
  creditCardFieldLabelContainer?: string
  creditCardFieldInputContainer?: string
  expirationDateFieldContainer?: string
  expirationDateFieldLabelContainer?: string
  expirationDateFieldInputContainer?: string
  cvvFieldContainer?: string
  cvvFieldLabelContainer?: string
  cvvFieldInputContainer?: string
  nameFieldContainer?: string
  nameFieldLabelContainer?: string
  nameFieldInputContainer?: string
  installmentsFieldContainer?: string
  installmentsFieldLabelContainer?: string
  installmentsFieldSelectContainer?: string
  submitButton?: string
}

export interface PlugPaymentsCreditDialogState {
  open: boolean
  mode: 'pix' | 'boleto' | 'success' | 'error'
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

export interface PlugPaymentsCreditInstallmentsConfig {
  show: boolean
  quantity: number
}

export interface PlugPaymentsCreditChargePayload {
  card: PlugPaymentsCreditFormValues
  merchantId: string
  amount: number
  statementDescriptor: string
  capture: boolean
  orderId: string
  description: string
  customerId: string
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
  declined_code?: string
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
