export interface MalgaCheckoutFullBoletoChargeSuccess {
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

export interface MalgaCheckoutFullBoletoChargeError {
  type: string
  message: string
  errorStack: unknown
}

export interface MalgaCheckoutFullCreditChargeSuccess {
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

export interface MalgaCheckoutFullCreditChargeError {
  type: string
  message: string
  code?: number
  declinedCode?: string
  errorStack: unknown
}

export interface MalgaCheckoutFullPixChargeSuccess {
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

export interface MalgaCheckoutFullPixChargeError {
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

export interface NuPay {
  param: string
}

export interface Credit {
  installments: {
    show: boolean
    quantity: number
  }
  checkedSaveCard: boolean
  showCreditCard: boolean
  cvvCheck?: boolean
  cvvCheckMerchantId?: string
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
    streetNumber: string
    complement: string
    district: string
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

export interface MalgaCheckoutFullPaymentMethods {
  pix?: Pix
  credit?: Credit
  boleto?: Boleto
  nupay?: NuPay
}

export interface MalgaCheckoutFullPage {
  brandUrl?: string
  footerDescription?: string
  delivery?: number
  backRoute?: string
  products?: Product[]
  internationalCustomer?: boolean
}

export interface MalgaCheckoutFullFraudAnalysisCart {
  name: string
  quantity: number
  sku: string
  unitPrice: number
  risk: string
}

export interface MalgaCheckoutFullFraudAnalysis {
  browserFingerprint?: string
  customer?: Customer
  usePartialCustomer?: boolean
  cart?: MalgaCheckoutFullFraudAnalysisCart[]
}

export interface MalgaCheckoutFullTransaction {
  statementDescriptor?: string
  amount?: number
  capture?: boolean
  description?: string
  orderId?: string
  customerId?: string
  currency?: string
  fraudAnalysis?: MalgaCheckoutFullFraudAnalysis
  paymentFlowMetadata?: Record<string, unknown>
}

export interface MalgaCheckoutFullDialog {
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

export type MalgaCheckoutFullChargeSuccess =
  | MalgaCheckoutFullBoletoChargeSuccess
  | MalgaCheckoutFullCreditChargeSuccess
  | MalgaCheckoutFullPixChargeSuccess

export type MalgaCheckoutFullChargeError =
  | MalgaCheckoutFullBoletoChargeError
  | MalgaCheckoutFullCreditChargeError
  | MalgaCheckoutFullPixChargeError

interface MalgaCheckoutFullCustomizationColors {
  lightest: string
  light: string
  medium: string
  dark: string
  darkest: string
}

export interface MalgaCheckoutFullCustomization {
  brandUrl: string
  primaryColor: MalgaCheckoutFullCustomizationColors
  secondaryColor: MalgaCheckoutFullCustomizationColors
  errorColor: MalgaCheckoutFullCustomizationColors
  warningColor: MalgaCheckoutFullCustomizationColors
  successColor: MalgaCheckoutFullCustomizationColors
  backgroundColor: string
}

export interface MalgaCheckoutFullSessionNormalized
  extends MalgaCheckoutFullSession {
  checkoutPaymentMethods: MalgaCheckoutFullPaymentMethods
  transactionConfig: MalgaCheckoutFullTransaction
  customization: MalgaCheckoutFullCustomization
}

export interface MalgaCheckoutSessionItems {
  name: string
  description?: string
  unitPrice: number
  quantity: number
  tangible?: boolean
}

export interface MalgaCheckoutFullSession {
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
  items: MalgaCheckoutSessionItems[]
  paymentLink: string
  paymentMethods: PaymentMethod[]
  createdAt: string
  updatedAt?: string
  publicKey?: string
  settings: MalgaCheckoutFullUserSettings
}

export type PaymentMethod = Boleto | Credit | Pix

export interface MalgaCheckoutFullUserSettings {
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
