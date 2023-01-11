import { BoletoAttributes } from '../../providers/boleto'
import { MalgaPaymentsDialogState } from '../../types/malga-payments-dialog-state.types'
import { MalgaPaymentsError } from '../../types/malga-payments-error.types'
import { MalgaPaymentsSuccess } from '../../types/malga-payments-success.types'

export interface MalgaPaymentsBoletoDialogState
  extends MalgaPaymentsDialogState {
  paymentCode?: string
  paymentImageUrl?: string
  expirationDate?: string
}

export type MalgaPaymentsBoletoPaymentSuccessCallback = (
  data: MalgaPaymentsSuccess,
) => CustomEvent<{ data: MalgaPaymentsSuccess }>

export type MalgaPaymentsBoletoPaymentFailedCallback = (
  error: MalgaPaymentsError,
) => CustomEvent<{ error: MalgaPaymentsError }>

export type MalgaPaymentsBoletoShowDialogCallback = (
  dialogData: MalgaPaymentsBoletoDialogState,
) => void

export interface MalgaPaymentsBoletoChargeRequest {
  data: BoletoAttributes
  onPaymentSuccess: MalgaPaymentsBoletoPaymentSuccessCallback
  onPaymentFailed: MalgaPaymentsBoletoPaymentFailedCallback
  onShowDialog: MalgaPaymentsBoletoShowDialogCallback
}
