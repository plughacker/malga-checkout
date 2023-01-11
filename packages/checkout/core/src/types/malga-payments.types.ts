import { MalgaPaymentsError } from './malga-payments-error.types'
import { MalgaPaymentsSuccess } from './malga-payments-success.types'

export interface MalgaPayments {
  pay(): void
  handlePaymentSuccess(data: MalgaPaymentsSuccess): void
  handlePaymentFailed(error: MalgaPaymentsError): void
}
