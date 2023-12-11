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
  fraudAnalysis?: FraudAnalysis
  paymentFlow?: Record<string, unknown>
  splitRules?: SplitRule[]
  providerReferenceKey?: string
}

export interface FraudAnalysisCart {
  name: string
  quantity: number
  sku: string
  unitPrice: number
  risk: string
}

export interface FraudAnalysis {
  browserFingerprint?: string
  customer?: Customer
  cart?: FraudAnalysisCart[]
  usePartialCustomer?: boolean
}

export interface SplitRule {
  sellerId: string
  percentage?: number
  amount?: number
  processingFee: boolean
  liable: boolean
  fares?: {
    mdr: number
    fee: number
  }
}
