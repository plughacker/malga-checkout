import { PlugPaymentsPaymentMethods } from './plug-payments-payment-methods.types'
import { PlugPaymentsPaymentSource } from './plug-payments-payment-source.types'
import { PlugPaymentsTransactionsRequests } from './plug-payments-transaction-requests.types'

export interface PlugPaymentsSuccess {
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
  paymentMethod: PlugPaymentsPaymentMethods
  paymentSource: PlugPaymentsPaymentSource
  transactionRequests: PlugPaymentsTransactionsRequests[]
}
