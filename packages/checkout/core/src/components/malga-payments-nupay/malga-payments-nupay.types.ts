import { NuPayAttributes } from '../../providers/nupay'
import { MalgaPaymentsDialogState } from '../../types/malga-payments-dialog-state.types'
import { MalgaPaymentsError } from '../../types/malga-payments-error.types'
import { MalgaPaymentsSuccess } from '../../types/malga-payments-success.types'

export type MalgaPaymentsNuPayDialogState = MalgaPaymentsDialogState

export type MalgaPaymentsNuPayPaymentSuccessCallback = (
  data: MalgaPaymentsSuccess,
) => CustomEvent<{ data: MalgaPaymentsSuccess }>

export type MalgaPaymentsNuPayPaymentFailedCallback = (
  error: MalgaPaymentsError,
) => CustomEvent<{ error: MalgaPaymentsError }>

export type MalgaPaymentsNuPayShowDialogCallback = (
  dialogData: MalgaPaymentsNuPayDialogState,
) => void

export interface MalgaPaymentsNuPayChargeRequest {
  data: NuPayAttributes
  onPaymentSuccess: MalgaPaymentsNuPayPaymentSuccessCallback
  onPaymentFailed: MalgaPaymentsNuPayPaymentFailedCallback
  onShowDialog: MalgaPaymentsNuPayShowDialogCallback
}
