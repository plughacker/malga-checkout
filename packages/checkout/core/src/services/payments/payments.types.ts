import { PaymentSource } from '../../providers/base-provider'
import { Boleto, PaymentMethodBoleto } from '../../providers/boleto'
import { Card, PaymentMethodCard } from '../../providers/card'
import { Drip, PaymentMethodDrip } from '../../providers/drip'
import { PaymentMethodPix, Pix } from '../../providers/pix'
import { CreateChargeData } from '../charges'

export type Provider = Boleto | Card | Pix | Drip

export interface PaymentsConstructor {
  provider: Provider
}

export interface PaymentsPay {
  headers?: unknown
  payload?: CreateChargePaymentData
}

export interface CreateChargePaymentData extends CreateChargeData {
  paymentSource: PaymentSource
  paymentMethod:
    | PaymentMethodCard
    | PaymentMethodPix
    | PaymentMethodBoleto
    | PaymentMethodDrip
}
