import { MalgaPaymentsItem } from '../../types/malga-payments-items.types'

interface DripAttributesBrowser {
  ipAddress: string
  browserFingerprint: string
}

export interface DripAttributes {
  items?: MalgaPaymentsItem[] | null
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
