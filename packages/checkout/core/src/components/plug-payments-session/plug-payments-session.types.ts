import { PlugPaymentsBoletoDialogState } from '../plug-payments-boleto/plug-payments-boleto.types'
import { PlugPaymentsCreditDialogState } from '../plug-payments-credit/plug-payments-credit.types'
import { PlugPaymentsPixDialogState } from '../plug-payments-pix/plug-payments-pix.types'

export type PlugPaymentsSessionDialogState =
  | PlugPaymentsPixDialogState
  | PlugPaymentsCreditDialogState
  | PlugPaymentsBoletoDialogState

export interface PlugPaymentsSessionRequest {
  onShowDialog?: PlugPaymentsSessionDialogShowCallback
}

export type PlugPaymentsSessionDialogShowCallback = (
  dialogData: PlugPaymentsSessionDialogState,
) => void
