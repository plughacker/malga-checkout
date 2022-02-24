export interface PlugCheckoutFullBoletoChargeSuccess {
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

export interface PlugCheckoutFullBoletoChargeError {
  type: string
  message: string
  errorStack: unknown
}

export interface PlugCheckoutFullCreditChargeSuccess {
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

export interface PlugCheckoutFullCreditChargeError {
  type: string
  message: string
  code?: number
  declinedCode?: string
  errorStack: unknown
}

export interface PlugCheckoutFullPixChargeSuccess {
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

export interface PlugCheckoutFullPixChargeError {
  type: string
  message: string
  errorStack: unknown
}

export interface Boleto {
  expiresDate: string
  instructions: string
  interest: {
    days: number
    amount?: number
    percentage?: number
  }
  fine: {
    days: number
    amount?: number
    percentage?: number
  }
}

export interface Pix {
  expiresIn: number
}

export interface Credit {
  installments: {
    show: boolean
    quantity: number
  }
  checkedSaveCard: boolean
  showCreditCard: boolean
}

export interface Customer {
  name: string
  email: string
  identification: string
  phoneNumber: string
  address: {
    zipCode: string
    street: string
    number: string
    complement: string
    neighborhood: string
    city: string
    state: string
    country: string
  }
}

export interface Product {
  name: string
  amount: number
  quantity: number
  description: string
}

export interface PlugCheckoutFullPaymentMethods {
  pix?: Pix
  credit?: Credit
  boleto?: Boleto
}

export interface PlugCheckoutFullPage {
  brandUrl: string
  footerDescription: string
  delivery: number
  backRoute: string
  products: Product[]
}

export interface PlugCheckoutFullFraudAnalysisCart {
  name: string
  quantity: number
  sku: string
  unitPrice: number
  risk: 'Low' | 'High'
}

export interface PlugCheckoutFullFraudAnalysis {
  customer: Customer
  cart: PlugCheckoutFullFraudAnalysisCart[]
}

export interface PlugCheckoutFullTransaction {
  statementDescriptor: string
  amount: number
  capture: boolean
  description?: string
  orderId?: string
  customerId?: string
  currency?: string
  fraudAnalysis?: PlugCheckoutFullFraudAnalysis
}

export interface PlugCheckoutFullDialog {
  show: boolean
  actionButtonLabel: string
  successActionButtonLabel: string
  errorActionButtonLabel: string
  successRedirectUrl: string
  pixFilledProgressBarColor?: string
  pixEmptyProgressBarColor?: string
}

export type PlugCheckoutFullChargeSuccess =
  | PlugCheckoutFullBoletoChargeSuccess
  | PlugCheckoutFullCreditChargeSuccess
  | PlugCheckoutFullPixChargeSuccess

export type PlugCheckoutFullChargeError =
  | PlugCheckoutFullBoletoChargeError
  | PlugCheckoutFullCreditChargeError
  | PlugCheckoutFullPixChargeError
