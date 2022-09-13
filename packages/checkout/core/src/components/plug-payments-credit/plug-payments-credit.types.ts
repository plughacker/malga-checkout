import { PlugPaymentsError } from "../../types/plug-payments-error.types"
import { PlugPaymentsSuccess } from "../../types/plug-payments-success.types"

export interface PlugPaymentsCreditDialogState {
  open: boolean
  mode?: 'pix' | 'boleto' | 'success' | 'error'
  amount?: number
  errorMessage?: string
}

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
