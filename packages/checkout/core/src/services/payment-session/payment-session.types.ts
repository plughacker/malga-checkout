import {
  PlugCheckoutPaymentMethods,
  PlugCheckoutTransaction,
} from '../../components/plug-checkout/plug-checkout.types'

export interface PaymentSessionDataNormalized extends PaymentSessionData {
  checkoutPaymentMethods: PlugCheckoutPaymentMethods
  transactionConfig: PlugCheckoutTransaction
}

export interface PaymentSessionData {
  id: string
  name: string
  status: string
  isActive: boolean
  clientId: string
  orderId: string
  amount: number
  currency: string
  capture: boolean
  merchantId: string
  dueDate: string
  description: string
  statementDescriptor: string
  items: PaymentSessionItemData[]
  paymentMethods: PaymentSessionPaymentMethod[]
  createdAt: string
  updatedAt: string
}

export type PaymentSessionPaymentMethod =
  | PaymentSessionPaymentMethodPix
  | PaymentSessionPaymentMethodBoleto
  | PaymentSessionPaymentMethodCard

export interface PaymentSessionPaymentMethodPix {
  paymentType: 'pix'
  expiresIn: number
}

export interface PaymentSessionPaymentMethodBoleto {
  paymentType: 'boleto'
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

export interface PaymentSessionPaymentMethodCard {
  paymentType: 'credit'
  installments: number
}

export interface PaymentSessionItemData {
  name: string
  description: string
  unitPrice: number
  quantity: number
  tangible: boolean
}
