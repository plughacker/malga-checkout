import { PixAttributes } from '../../providers/pix'
import { PlugPaymentsError } from '../../types/plug-payments-error.types'
import { PlugPaymentsSuccess } from '../../types/plug-payments-success.types'

export interface PlugPaymentsPixDialogState {
  open: boolean
  mode?: 'pix' | 'boleto' | 'success' | 'error'
  amount?: number
  paymentCode?: string
  paymentImageUrl?: string
  expirationDate?: string
  expirationTime?: number
  errorTitle?: string
  errorMessage?: string
  successMessage?: string
}

export interface PlugPaymentsPixChargeError {
  type: string
  message: string
  errorStack: unknown
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
