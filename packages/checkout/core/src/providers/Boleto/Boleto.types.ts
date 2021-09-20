export interface IBoleto {
  expiresDate: string
  instructions: string
  interest: {
    days: number
    amount: number
    percentage: number
  }
  fine: {
    days: number
    amount: number
    percentage: number
  }
}

export interface IPaymentMethodBoleto extends IBoleto {
  paymentType: 'boleto'
}
