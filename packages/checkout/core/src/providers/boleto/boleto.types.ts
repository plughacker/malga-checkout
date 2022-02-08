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
  boleto: BoletoAttributes
}
