import { Boleto } from '../../providers/boleto'
import { Card } from '../../providers/card'
import { Pix } from '../../providers/pix'

export type Provider = Boleto | Card | Pix

export interface PaymentsConstructor {
  provider: Provider
}

export interface PaymentsPay {
  headers?: unknown
  payload?: unknown
}
