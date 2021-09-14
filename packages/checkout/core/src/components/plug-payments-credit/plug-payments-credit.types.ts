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

export interface PlugPaymentsCreditRequestPayload {
  card: PlugPaymentsCreditFormValues
  merchantId: string
  amount: number
  statementDescriptor: string
  capture: boolean
}

export interface PlugPaymentsCreditOneShotSuccess {
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

export interface PlugPaymentsCreditOneShotError {
  type: string
  message: string
  code?: number
  declined_code?: string
}

export interface PlugPaymentsCreditOneShotRequest {
  publicKey: string
  clientId: string
  sandbox: boolean
  onPaymentSuccess: (
    data: PlugPaymentsCreditOneShotSuccess,
  ) => CustomEvent<{ data }>
  onPaymentFailed: (
    error: PlugPaymentsCreditOneShotError,
  ) => CustomEvent<{ error }>
  data: PlugPaymentsCreditRequestPayload
}
