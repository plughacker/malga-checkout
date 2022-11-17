export interface PlugPaymentsDialogState {
  open: boolean
  mode?: PlugPaymentsDialogStateMode
  amount?: number
  errorMessage?: string
}

export type PlugPaymentsDialogStateMode = 'pix' | 'boleto' | 'success' | 'error'