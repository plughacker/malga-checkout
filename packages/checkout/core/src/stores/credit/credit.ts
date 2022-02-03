import { createStore } from '@stencil/store'

import { CreditState } from './credit.types'

export const { state } = createStore<CreditState>({
  form: {
    cardNumber: '',
    cvv: '',
    installments: '',
    name: '',
    expirationDate: '',
    saveCard: false,
  },
  validations: {
    allFieldsIsBlank: false,
    fields: {
      name: null,
      cardNumber: null,
      cvv: null,
      installments: null,
      expirationDate: null,
    },
  },
})
