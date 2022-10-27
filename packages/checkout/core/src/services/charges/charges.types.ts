import { Customer } from '../../providers/base-provider'
import { Provider } from '../payments'

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
  risk: string
}

export interface FraudAnalysis {
  customer?: Customer
  cart?: FraudAnalysisCart[]
}
