import { Customer } from '../base-provider/base-provider.types'

export interface BoletoAttributes {
  expiresDate: string
  instructions: string
  interest: {
    days: number
    amount?: number
    percentage?: number
  }
  fine: {
    days: number
    amount?: number
    percentage?: number
  }
}

export interface PaymentMethodBoleto extends BoletoAttributes {
  paymentType: 'boleto'
}

export interface BoletoConstructor {
  customerId?: string
  customer?: Customer
  boleto: BoletoAttributes
}
