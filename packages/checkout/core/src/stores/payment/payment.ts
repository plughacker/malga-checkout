import { createStore } from '@stencil/store'

export const { state, onChange } = createStore({
  selectedPaymentMethod: '',
  isSelectedSavedCard: false,
  cvv: '',
  installments: '',
  cardId: '',
  chargeId: '',
  paymentUrl: '',
})

onChange('selectedPaymentMethod', (value) => {
  state.cvv = ''
  state.cardId = ''
  state.installments = ''
  state.paymentUrl = ''
  state.isSelectedSavedCard = value.includes('credit-')
})
