import { DripAttributes } from '../../providers/drip'
import { MalgaPaymentsDialogState } from '../../types/malga-payments-dialog-state.types'
import { MalgaPaymentsError } from '../../types/malga-payments-error.types'
import { MalgaPaymentsSuccess } from '../../types/malga-payments-success.types'

export type MalgaPaymentsDripDialogState = MalgaPaymentsDialogState

export type MalgaPaymentsDripPaymentSuccessCallback = (
  data: MalgaPaymentsSuccess,
) => CustomEvent<{ data: MalgaPaymentsSuccess }>

export type MalgaPaymentsDripPaymentFailedCallback = (
  error: MalgaPaymentsError,
) => CustomEvent<{ error: MalgaPaymentsError }>

export type MalgaPaymentsDripDialogShowCallback = (
  dialogData: MalgaPaymentsDripDialogState,
) => void

export interface MalgaPaymentsDripChargeRequest {
  data?: DripAttributes
  onPaymentSuccess?: MalgaPaymentsDripPaymentSuccessCallback
  onPaymentFailed?: MalgaPaymentsDripPaymentFailedCallback
  onShowDialog?: MalgaPaymentsDripDialogShowCallback
}
