import { PlugCheckoutPaymentMethods, PlugCheckoutTransaction } from '../../components/plug-checkout/plug-checkout.types'
import { PaymentMethodBoleto } from '../../providers/boleto'
import { PaymentMethodCard } from '../../providers/card'
import { PaymentMethodPix } from '../../providers/pix'

export type PaymentMethod =
  | PaymentMethodBoleto
  | PaymentMethodCard
  | PaymentMethodPix

export interface SessionNormalized extends Session {
  checkoutPaymentMethods: PlugCheckoutPaymentMethods
  transactionConfig: PlugCheckoutTransaction
}

export interface Session {
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
  items: {
    name: string
    description?: string
    unitPrice: number
    quantity: number
    tangible?: boolean
  }[]
  paymentLink: string
  paymentMethods: PaymentMethod[]
  createdAt: string
  updatedAt?: string
  publicKey?: string
  settings: {
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
}
