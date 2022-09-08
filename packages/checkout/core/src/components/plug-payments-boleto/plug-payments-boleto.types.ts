import { BoletoAttributes } from '../../providers/boleto'
import { PlugPaymentsError } from '../../types/plug-payments-error.types'
import { PlugPaymentsSuccess } from '../../types/plug-payments-success.types'

export interface PlugPaymentsBoletoDialogState {
  open: boolean
  mode?: 'pix' | 'boleto' | 'success' | 'error'
  amount?: number
  paymentCode?: string
  paymentImageUrl?: string
  expirationDate?: string
  errorMessage?: string
}

export type PlugPaymentsBoletoPaymentSuccessCallback = (
  data: PlugPaymentsSuccess,
) => CustomEvent<{ data: PlugPaymentsSuccess }>

export type PlugPaymentsBoletoPaymentFailedCallback = (
  error: PlugPaymentsError,
) => CustomEvent<{ error: PlugPaymentsError }>

export type PlugPaymentsBoletoShowDialogCallback = (
  dialogData: PlugPaymentsBoletoDialogState,
) => void

export interface PlugPaymentsBoletoChargeRequest {
  data: BoletoAttributes
  onPaymentSuccess: PlugPaymentsBoletoPaymentSuccessCallback
  onPaymentFailed: PlugPaymentsBoletoPaymentFailedCallback
  onShowDialog: PlugPaymentsBoletoShowDialogCallback
}
