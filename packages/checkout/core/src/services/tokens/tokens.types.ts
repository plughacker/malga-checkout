import { Api } from '../api'

export interface CardData {
  type: 'card'
  cardNumber: string
  expirationDate: string
  cvv: string
  name: string
}

export type Data = CardData

export interface TokenConstructor {
  api: Api
  data: Data
}
