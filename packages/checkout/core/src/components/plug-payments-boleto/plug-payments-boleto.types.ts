import { BoletoAttributes } from '../../providers/boleto'
import { PlugPaymentsDialogState } from '../../types/plug-payments-dialog-state.types'
import { PlugPaymentsError } from '../../types/plug-payments-error.types'
import { PlugPaymentsSuccess } from '../../types/plug-payments-success.types'

export interface PlugPaymentsBoletoDialogState extends PlugPaymentsDialogState {
  paymentCode?: string
  paymentImageUrl?: string
  expirationDate?: string
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
