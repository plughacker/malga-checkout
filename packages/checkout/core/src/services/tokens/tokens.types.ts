export interface CardData {
  type: 'card'
  cardNumber: string
  expirationDate: string
  cvv: string
  name: string
}

export interface TokenConstructor {
  data: CardData
}
