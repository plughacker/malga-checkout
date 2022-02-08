export type SavedCardStatus = 'active' | 'failed' | 'pending'

export enum SavedCardTypes {
  ACTIVE = 'active',
  FAILED = 'failed',
  PENDING = 'pending',
}

export interface SavedCard {
  id: string
  status: SavedCardStatus
  createdAt: string
  clientId: string
  customerId: string
  brand: string
  cvvChecked: boolean
  fingerprint: string
  first6digits: string
  last4digits: string
  expirationMonth: string
  expirationYear: string
}

export interface SavedCardsState {
  cards: SavedCard[]
  hasCards: boolean
}
