import { createStore } from '@stencil/store'

export const { state, onChange } = createStore({
  selectedPaymentMethod: '',
  cvv: '',
  chargeId: '',
})

onChange('selectedPaymentMethod', () => {
  state.cvv = ''
})
