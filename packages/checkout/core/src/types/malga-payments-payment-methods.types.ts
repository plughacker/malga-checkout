export type MalgaPaymentsPaymentMethods =
  | MalgaPaymentsPaymentMethodPix
  | MalgaPaymentsPaymentMethodBoleto
  | MalgaPaymentsPaymentMethodCard

export interface MalgaPaymentsPaymentMethodPix {
  paymentType: 'pix'
  expiresIn: number
  qrCodeData: string
  qrCodeImageUrl: string
}

export interface MalgaPaymentsPaymentMethodBoleto {
  paymentType: 'boleto'
  expiresDate: string
  barcodeData: string
  barcodeImageUrl: string
}

export interface MalgaPaymentsPaymentMethodCard {
  paymentType: 'credit' | 'debit'
  installments?: number
}
