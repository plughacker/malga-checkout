import { Boleto } from '../../providers/boleto'
import { Pix } from '../../providers/pix'
import { Card } from '../../providers/card'
import { Customer } from '../../providers/base-provider'

export type Provider = Boleto | Card | Pix

export interface ChargeConstructor {
  provider: Provider
}

export interface CreateChargeData {
  merchantId: string
  amount: number
  customerId?: string
  currency?: string
  orderId?: string
  statementDescriptor?: string
  capture?: boolean
  description?: string
}

export interface FraudAnalysisCart {
  name: string
  quantity: number
  sku: string
  unitPrice: number
  risk: 'Low' | 'High'
}

export interface FraudAnalysis {
  customer: Customer
  cart: FraudAnalysisCart[]
}
