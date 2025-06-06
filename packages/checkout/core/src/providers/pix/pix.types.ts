import { MalgaPaymentsItem } from '../../types/malga-payments-items.types'

export interface PixAttributes {
  expiresIn: number
  items?: MalgaPaymentsItem[] | null
}

export interface PaymentMethodPix extends PixAttributes {
  paymentType: 'pix'
}

export interface PixConstructor {
  pix: PixAttributes
}
