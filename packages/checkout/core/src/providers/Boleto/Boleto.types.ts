import { ICustomer } from '../base-provider/base-provider.types'

export interface IBoleto {
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

export interface IPaymentMethodBoleto extends IBoleto {
  paymentType: 'boleto'
}

export interface BoletoConstructor {
  customerId?: string
  customer?: ICustomer
  boleto: IBoleto
}
