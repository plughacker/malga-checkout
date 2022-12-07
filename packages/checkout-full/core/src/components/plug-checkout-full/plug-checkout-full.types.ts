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
  phoneNumber: string
  document: {
    country: string
    type: string
    number: string
  }
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
  sku: string
  risk: string
}

export interface Product {
  name: string
  amount: number
  quantity: number
  description: string
  sku: string
  risk: string
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
  risk: string
}

export interface PlugCheckoutFullFraudAnalysis {
  customer?: Customer
  cart?: PlugCheckoutFullFraudAnalysisCart[]
}

export interface PlugCheckoutFullTransaction {
  statementDescriptor?: string
  amount?: number
  capture?: boolean
  description?: string
  orderId?: string
  customerId?: string
  currency?: string
  fraudAnalysis?: PlugCheckoutFullFraudAnalysis
}

export interface PlugCheckoutFullDialog {
  show: boolean
  actionButtonLabel?: string
  successActionButtonLabel?: string
  errorActionButtonLabel?: string
  successRedirectUrl?: string
  boletoWaitingPaymentMessage?: string
  pixWaitingPaymentMessage?: string
  pixImportantMessages?: string[]
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

interface PlugCheckoutFullCustomizationColors {
  lightest: string
  light: string
  medium: string
  dark: string
  darkest: string
}

export interface PlugCheckoutFullCustomization {
  brandUrl: string
  primaryColor: PlugCheckoutFullCustomizationColors
  secondaryColor: PlugCheckoutFullCustomizationColors
  errorColor: PlugCheckoutFullCustomizationColors
  warningColor: PlugCheckoutFullCustomizationColors
  successColor: PlugCheckoutFullCustomizationColors
  backgroundColor: string
}

export interface PlugCheckoutFullSessionNormalized
  extends PlugCheckoutFullSession {
  checkoutPaymentMethods: PlugCheckoutFullPaymentMethods
  transactionConfig: PlugCheckoutFullTransaction
  customization: PlugCheckoutFullCustomization
}

export interface PlugCheckoutSessionItems {
  name: string
  description?: string
  unitPrice: number
  quantity: number
  tangible?: boolean
}

export interface PlugCheckoutFullSession {
  id: string
  name: string
  status: string
  isActive: boolean
  clientId: string
  orderId?: string
  amount: number
  currency: string
  capture: boolean
  merchantId: string
  dueDate: string
  description?: string
  statementDescriptor?: string
  items: PlugCheckoutSessionItems[]
  paymentLink: string
  paymentMethods: PaymentMethod[]
  createdAt: string
  updatedAt?: string
  publicKey?: string
  settings: PlugCheckoutFullUserSettings
}

export type PaymentMethod = Boleto | Credit | Pix

export interface PlugCheckoutFullUserSettings {
  id: string
  email: string
  phone: string
  statementDescription: string
  logo: string
  mainColor: string
  secondaryColor?: string
  attentionColor?: string
  errorColor?: string
  successColor?: string
  backgroundColor?: string
  companyName: string
  clientId: string
  documentNumber: string
  language: string
}
