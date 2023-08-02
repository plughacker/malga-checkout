export interface NuPayAttributes {
  taxValue?: number
  delayToAutoCancel: number
  orderUrl: string
}

export interface PaymentMethodNuPay extends NuPayAttributes {
  paymentType: 'nupay'
}

export interface NuPayConstructor {
  nupay: NuPayAttributes
}
