import { Customer } from '../base-provider/base-provider.types'

export interface PixAttributes {
  expiresIn: number
}

export interface PaymentMethodPix {
  paymentType: 'pix'
  expiresIn: number
}

export interface PixConstructor {
  customerId?: string
  customer?: Customer
  pix: PixAttributes
}
