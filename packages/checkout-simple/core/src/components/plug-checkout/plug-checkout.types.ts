export interface PlugCheckoutFormCustomStyleFormClasses {
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

export interface PlugCheckoutFormValues {
  cardNumber: string
  expirationDate: string
  cvv: string
  name: string
  installments: string
}

export interface PlugCheckoutInstallmentsConfig {
  show: boolean
  quantity: number
}

export interface PlugCheckoutRequestPayload {
  card: PlugCheckoutFormValues
  merchantId: string
  amount: number
  statementDescriptor: string
  capture: boolean
}

export interface PlugCheckoutOneShotSuccess {
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

export interface PlugCheckoutOneShotError {
  type: string
  message: string
  code?: number
  declined_code?: string
}

export interface PlugCheckoutOneShotRequest {
  publicKey: string
  clientId: string
  sandbox: boolean
  onPaymentSuccess: (data: PlugCheckoutOneShotSuccess) => CustomEvent<{ data }>
  onPaymentFailed: (error: PlugCheckoutOneShotError) => CustomEvent<{ error }>
  data: PlugCheckoutRequestPayload
}
