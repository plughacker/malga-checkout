export interface CreditState {
  form: {
    cardNumber: string
    cvv: string
    installments: string
    name: string
    expirationDate: string
    saveCard: boolean
  }
  validations: {
    allFieldsIsBlank: boolean
    fields: {
      name: null | string
      cardNumber: null | string
      cvv: null | string
      installments: null | string
      expirationDate: null | string
    }
  }
}

export interface CreditForm {
  cardNumber: string | null
  expirationDate: string | null
  cvv: string | null
  name: string | null
  installments: string | null
  saveCard: boolean
}
