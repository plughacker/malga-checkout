export interface DripAttributes {
  param: string
}

export interface PaymentMethodDrip {
  paymentType: 'drip'
  param: string
}

export interface DripConstructor {
  drip: DripAttributes
}
