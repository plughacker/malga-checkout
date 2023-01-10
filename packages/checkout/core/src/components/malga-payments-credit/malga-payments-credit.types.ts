import { MalgaPaymentsDialogState } from '../../types/malga-payments-dialog-state.types'
import { MalgaPaymentsError } from '../../types/malga-payments-error.types'
import { MalgaPaymentsSuccess } from '../../types/malga-payments-success.types'

export type MalgaPaymentsCreditDialogState = MalgaPaymentsDialogState

export interface MalgaPaymentsCreditTokenizedCard {
  cardId: string
  cardCvv: string
}

export interface MalgaPaymentsCreditManualCard {
  cardNumber: string
  expirationDate: string
  cvv: string
  name: string
  installments: string
  saveCard: boolean
}

export type MalgaPaymentsCreditFormValues =
  | MalgaPaymentsCreditTokenizedCard
  | MalgaPaymentsCreditManualCard

export type MalgaPaymentsCreditPaymentSuccessCallback = (
  data: MalgaPaymentsSuccess,
) => CustomEvent<{ data: MalgaPaymentsSuccess }>

export type MalgaPaymentsCreditPaymentFailedCallback = (
  error: MalgaPaymentsError,
) => CustomEvent<{ error: MalgaPaymentsError }>

export type MalgaPaymentsCreditShowDialogCallback = (
  dialogData: MalgaPaymentsCreditDialogState,
) => void

export interface MalgaPaymentsCreditChargeRequest {
  data: MalgaPaymentsCreditFormValues
  onPaymentSuccess: MalgaPaymentsCreditPaymentSuccessCallback
  onPaymentFailed: MalgaPaymentsCreditPaymentFailedCallback
  onShowDialog: MalgaPaymentsCreditShowDialogCallback
}
