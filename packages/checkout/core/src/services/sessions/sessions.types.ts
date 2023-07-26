import {
  MalgaCheckoutPaymentMethods,
  MalgaCheckoutTransaction,
} from '../../components/malga-checkout/malga-checkout.types'
import { PaymentMethodBoleto } from '../../providers/boleto'
import { PaymentMethodCard } from '../../providers/card'
import { PaymentMethodPix } from '../../providers/pix'
import { SplitRule } from '../charges/charges.types'

export type PaymentMethod =
  | PaymentMethodBoleto
  | PaymentMethodCard
  | PaymentMethodPix

export interface SessionNormalized extends Session {
  checkoutPaymentMethods: MalgaCheckoutPaymentMethods
  transactionConfig: MalgaCheckoutTransaction
  customization: CustomizationData
}

export interface Session {
  id?: string
  name: string
  status?: string
  isActive: boolean
  clientId?: string
  orderId?: string
  amount: number
  currency: string
  capture: boolean
  merchantId: string
  dueDate: string
  description?: string
  statementDescriptor?: string
  splitRules?: SplitRule[]
  items: {
    name: string
    description?: string
    unitPrice: number
    quantity: number
    tangible?: boolean
  }[]
  paymentLink?: string
  paymentMethods: PaymentMethod[]
  createdAt?: string
  updatedAt?: string
  publicKey?: string
  settings?: UserSettings
}

export interface UserSettings {
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

export interface CustomizationData {
  brandUrl: string
  primaryColor: CustomizationColors
  secondaryColor: CustomizationColors
  errorColor: CustomizationColors
  warningColor: CustomizationColors
  successColor: CustomizationColors
  backgroundColor: string
}

export interface CustomizationColors {
  lightest: string
  light: string
  medium: string
  dark: string
  darkest: string
}
