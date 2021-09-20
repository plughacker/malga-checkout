export interface ICardFields {
  cardNumber: string
  cardCvv: string
  cardExpirationDate: string
  cardHolderName: string
}

export interface ICard {
  cardNumber: string
  expirationDate: string
  cvv: string
  name: string
  installments: number
}

export interface IPaymentSourceCard {
  sourceType: 'card'
  card: ICardFields
}

export interface IPaymentMethodCard {
  paymentType: 'credit' | 'debit'
  installments: number
}
