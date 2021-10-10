export interface CardFields {
  cardNumber: string
  cardCvv: string
  cardExpirationDate: string
  cardHolderName: string
}

export interface CardAttributes {
  cardNumber: string
  expirationDate: string
  cvv: string
  name: string
  installments: string
}

export interface PaymentSourceCard {
  sourceType: 'card'
  card: CardFields
}

export interface PaymentMethodCard {
  paymentType: 'credit' | 'debit'
  installments: number
}
