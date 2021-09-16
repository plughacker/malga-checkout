import { Api } from '../api'

export type Provider = unknown

export interface ICharges {
  api: Api
  provider: unknown
  create(): void
}

export interface ChargeConstructor {
  clientId: string
  publicKey: string
  sandbox: boolean
  provider: Provider
}
