import { PixAttributes } from '../../providers/pix'
import { MalgaPaymentsDialogState } from '../../types/malga-payments-dialog-state.types'
import { MalgaPaymentsError } from '../../types/malga-payments-error.types'
import { MalgaPaymentsSuccess } from '../../types/malga-payments-success.types'

export interface MalgaPaymentsPixDialogState extends MalgaPaymentsDialogState {
  paymentCode?: string
  paymentImageUrl?: string
  expirationDate?: string
  expirationTime?: number
  errorTitle?: string
  successMessage?: string
}

export type MalgaPaymentsPixPaymentSuccessCallback = (
  data: MalgaPaymentsSuccess,
) => CustomEvent<{ data: MalgaPaymentsSuccess }>

export type MalgaPaymentsPixPaymentFailedCallback = (
  error: MalgaPaymentsError,
) => CustomEvent<{ error: MalgaPaymentsError }>

export type MalgaPaymentsPixDialogShowCallback = (
  dialogData: MalgaPaymentsPixDialogState,
) => void

export interface MalgaPaymentsPixChargeRequest {
  data?: PixAttributes
  onPaymentSuccess?: MalgaPaymentsPixPaymentSuccessCallback
  onPaymentFailed?: MalgaPaymentsPixPaymentFailedCallback
  onShowDialog?: MalgaPaymentsPixDialogShowCallback
}
