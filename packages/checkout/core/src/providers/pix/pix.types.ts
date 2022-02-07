export interface PixAttributes {
  expiresIn: number
}

export interface PaymentMethodPix {
  paymentType: 'pix'
  expiresIn: number
}

export interface PixConstructor {
  pix: PixAttributes
}
