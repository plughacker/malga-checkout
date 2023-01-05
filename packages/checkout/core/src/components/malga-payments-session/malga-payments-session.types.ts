import { MalgaPaymentsBoletoDialogState } from '../malga-payments-boleto/malga-payments-boleto.types'
import { MalgaPaymentsCreditDialogState } from '../malga-payments-credit/malga-payments-credit.types'
import { MalgaPaymentsPixDialogState } from '../malga-payments-pix/malga-payments-pix.types'

export type MalgaPaymentsSessionDialogState =
  | MalgaPaymentsPixDialogState
  | MalgaPaymentsCreditDialogState
  | MalgaPaymentsBoletoDialogState

export interface MalgaPaymentsSessionRequest {
  onShowDialog?: MalgaPaymentsSessionDialogShowCallback
}

export type MalgaPaymentsSessionDialogShowCallback = (
  dialogData: MalgaPaymentsSessionDialogState,
) => void
