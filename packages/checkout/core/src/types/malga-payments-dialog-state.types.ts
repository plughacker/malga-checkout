export interface MalgaPaymentsDialogState {
  open: boolean
  mode?: MalgaPaymentsDialogStateMode
  amount?: number
  errorMessage?: string
}

export type MalgaPaymentsDialogStateMode =
  | 'pix'
  | 'boleto'
  | 'success'
  | 'error'
