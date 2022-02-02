import { createStore } from '@stencil/store'

import { checkIfAllFieldsIsBlank, validateCreditForm } from './credit.utils'
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

export const handleSubmitValidation = async () => {
  const validation = await validateCreditForm(state.form, {
    hasInstallments: true, // change to setting store
  })

  if (!validation.isValid) {
    state.validations.fields = {
      ...state.validations.fields,
      ...validation.errors,
    }

    const checkedIfAllFieldsIsBlank = checkIfAllFieldsIsBlank(state.form)

    if (checkedIfAllFieldsIsBlank) {
      state.validations.allFieldsIsBlank = true
    }
  }

  return validation.isValid
}
