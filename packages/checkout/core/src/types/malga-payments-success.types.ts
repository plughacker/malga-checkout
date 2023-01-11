import { MalgaPaymentsPaymentMethods } from './malga-payments-payment-methods.types'
import { MalgaPaymentsPaymentSource } from './malga-payments-payment-source.types'
import { MalgaPaymentsTransactionsRequests } from './malga-payments-transaction-requests.types'

export interface MalgaPaymentsSuccess {
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
  paymentMethod: MalgaPaymentsPaymentMethods
  paymentSource: MalgaPaymentsPaymentSource
  transactionRequests: MalgaPaymentsTransactionsRequests[]
}
