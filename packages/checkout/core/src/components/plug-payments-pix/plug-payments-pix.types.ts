import { PixAttributes } from '../../providers/pix'
import { PlugPaymentsDialogState } from '../../types/plug-payments-dialog-state.types'
import { PlugPaymentsError } from '../../types/plug-payments-error.types'
import { PlugPaymentsSuccess } from '../../types/plug-payments-success.types'

export interface PlugPaymentsPixDialogState extends PlugPaymentsDialogState {
  paymentCode?: string
  paymentImageUrl?: string
  expirationDate?: string
  expirationTime?: number
  errorTitle?: string
  successMessage?: string
}

export type PlugPaymentsPixPaymentSuccessCallback = (
  data: PlugPaymentsSuccess,
) => CustomEvent<{ data: PlugPaymentsSuccess }>

export type PlugPaymentsPixPaymentFailedCallback = (
  error: PlugPaymentsError,
) => CustomEvent<{ error: PlugPaymentsError }>

export type PlugPaymentsPixDialogShowCallback = (
  dialogData: PlugPaymentsPixDialogState,
) => void

export interface PlugPaymentsPixChargeRequest {
  data?: PixAttributes
  onPaymentSuccess?: PlugPaymentsPixPaymentSuccessCallback
  onPaymentFailed?: PlugPaymentsPixPaymentFailedCallback
  onShowDialog?: PlugPaymentsPixDialogShowCallback
}
