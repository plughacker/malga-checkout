import { MalgaPaymentsItem } from '../../types/malga-payments-items.types'

export interface BoletoAttributes {
  expiresDate: string
  instructions: string
  interest?: {
    days?: number
    amount?: number
    percentage?: number
  }
  fine?: {
    days?: number
    amount?: number
    percentage?: number
  }
  items?: MalgaPaymentsItem[] | null
}

export interface PaymentMethodBoleto extends BoletoAttributes {
  paymentType: 'boleto'
}

export interface BoletoConstructor {
  boleto: BoletoAttributes
}
