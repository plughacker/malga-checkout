import { ICustomer } from '../BaseProvider/BaseProvider.types'

export interface IPix {
  expiresIn: number
}

export interface IPaymentMethodPix {
  paymentType: 'pix'
  expiresIn: number
}

export interface PixConstructor {
  customerId?: string
  customer?: ICustomer
  pix: IPix
}
