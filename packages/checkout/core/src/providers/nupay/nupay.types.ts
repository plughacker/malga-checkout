export interface NuPayAttributes {
  param: string
}

export interface PaymentMethodNuPay {
  paymentType: 'nupay'
  param: string
}

export interface NuPayConstructor {
  nupay: NuPayAttributes
}
