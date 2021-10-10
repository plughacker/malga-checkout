import { Api } from '../api'
import { Boleto } from '../../providers/boleto'
import { Pix } from '../../providers/pix'
import { Card } from '../../providers/card'

export type IProvider = Boleto | Card | Pix

export interface IChargeConstructor {
  api: Api
  provider: IProvider
}

export interface ICreateChargeData {
  merchantId: string
  amount: number
  customerId?: string
  currency?: string
  orderId?: string
  statementDescriptor?: string
  capture?: boolean
  description?: string
}
