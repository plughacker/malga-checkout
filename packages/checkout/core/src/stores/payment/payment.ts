import { createStore } from '@stencil/store'

export const { state, onChange } = createStore({
  selectedPaymentMethod: '',
  isSelectedSavedCard: false,
  cvv: '',
  cardId: '',
  chargeId: '',
})

onChange('selectedPaymentMethod', (value) => {
  state.cvv = ''
  state.cardId = ''
  state.isSelectedSavedCard = value.includes('credit-')
})
