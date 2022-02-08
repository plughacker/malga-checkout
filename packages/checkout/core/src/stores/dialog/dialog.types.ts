export interface DialogState {
  configs: {
    mode: 'success' | 'boleto' | 'pix' | 'error'
    open: boolean
    amount: number
    paymentCode: string
    paymentImageUrl: string
    expirationDate: string
    expirationTime: number
    successMessage: string
    errorTitle: string
    errorMessage: string
  }
}
