export type PlugPaymentsPaymentMethods = PlugPaymentsPaymentMethodPix |
  PlugPaymentsPaymentMethodBoleto |
  PlugPaymentsPaymentMethodCard

export interface PlugPaymentsPaymentMethodPix {
  paymentType: 'pix'
  expiresIn: number
  qrCodeData: string
  qrCodeImageUrl: string
}

export interface PlugPaymentsPaymentMethodBoleto {
  paymentType: 'boleto'
  expiresDate: string
  barcodeData: string
  barcodeImageUrl: string
}

export interface PlugPaymentsPaymentMethodCard {
  paymentType: 'credit' | 'debit'
  installments?: number
}
