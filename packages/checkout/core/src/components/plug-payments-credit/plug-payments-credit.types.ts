import { PlugPaymentsDialogState } from '../../types/plug-payments-dialog-state.types'
import { PlugPaymentsError } from '../../types/plug-payments-error.types'
import { PlugPaymentsSuccess } from '../../types/plug-payments-success.types'

export type PlugPaymentsCreditDialogState = PlugPaymentsDialogState

export interface PlugPaymentsCreditTokenizedCard {
  cardId: string
  cardCvv: string
}

export interface PlugPaymentsCreditManualCard {
  cardNumber: string
  expirationDate: string
  cvv: string
  name: string
  installments: string
  saveCard: boolean
}

export type PlugPaymentsCreditFormValues =
  | PlugPaymentsCreditTokenizedCard
  | PlugPaymentsCreditManualCard

export type PlugPaymentsCreditPaymentSuccessCallback = (
  data: PlugPaymentsSuccess,
) => CustomEvent<{ data: PlugPaymentsSuccess }>

export type PlugPaymentsCreditPaymentFailedCallback = (
  error: PlugPaymentsError,
) => CustomEvent<{ error: PlugPaymentsError }>

export type PlugPaymentsCreditShowDialogCallback = (
  dialogData: PlugPaymentsCreditDialogState,
) => void

export interface PlugPaymentsCreditChargeRequest {
  data: PlugPaymentsCreditFormValues
  onPaymentSuccess: PlugPaymentsCreditPaymentSuccessCallback
  onPaymentFailed: PlugPaymentsCreditPaymentFailedCallback
  onShowDialog: PlugPaymentsCreditShowDialogCallback
}
