import { createStore } from '@stencil/store'

export const { state, onChange } = createStore({
  cards: [],
  hasCards: false,
})

onChange('cards', (value) => {
  state.hasCards = value.length > 0
})
