import { Api } from '../api'
import { Boleto } from '../../providers/Boleto'
import { Pix } from '../../providers/Pix'
import { Card } from '../../providers/Card'

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

export interface ICharges {
  api: Api
  provider: IProvider
  create(data: ICreateChargeData): void
}
