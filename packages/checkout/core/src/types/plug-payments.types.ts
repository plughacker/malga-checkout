import { PlugPaymentsError } from './plug-payments-error.types'
import { PlugPaymentsSuccess } from './plug-payments-success.types'

export interface PlugPayments {
  pay(): void
  handlePaymentSuccess(data: PlugPaymentsSuccess): void
  handlePaymentFailed(error: PlugPaymentsError): void
}
