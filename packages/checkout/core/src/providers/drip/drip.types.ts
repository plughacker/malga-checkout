interface DripAttributesItem {
  id: string
  quantity: number
  title: string
  unitPrice: number
}

interface DripAttributesBrowser {
  ipAddress: string
  browserFingerprint: string
}

export interface DripAttributes {
  items?: DripAttributesItem[] | null
  browser?: DripAttributesBrowser | null
  successRedirectUrl?: string
  cancelRedirectUrl?: string
}

export interface PaymentMethodDrip extends DripAttributes {
  paymentType: 'drip'
}

export interface DripConstructor {
  drip: DripAttributes
}
