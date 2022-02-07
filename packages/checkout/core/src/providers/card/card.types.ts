export interface CardFields {
  cardNumber: string
  cardCvv: string
  cardExpirationDate: string
  cardHolderName: string
}

export interface CardTokenized {
  cardId: string
  cardCvv: string
}

export interface CardForm {
  cardNumber: string
  expirationDate: string
  cvv: string
  name: string
  installments: string
}

export type CardAttributes = CardTokenized | CardForm

export interface PaymentSourceCard {
  sourceType: 'card'
  cardId: string
  cardCvv: string
}

export interface PaymentMethodCard {
  paymentType: 'credit' | 'debit'
  installments: number
}
