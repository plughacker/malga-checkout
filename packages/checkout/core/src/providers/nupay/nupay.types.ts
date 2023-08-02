export interface NuPayAttributes {
  taxValue?: number | null
  delayToAutoCancel: number
  orderUrl: string
}

export interface PaymentMethodNuPay extends NuPayAttributes {
  paymentType: 'nupay'
}

export interface NuPayConstructor {
  nupay: NuPayAttributes
}
