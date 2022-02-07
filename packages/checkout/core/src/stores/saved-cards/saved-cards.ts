import { createStore } from '@stencil/store'

import { SavedCardsState, SavedCardTypes } from './saved-cards.types'

export const { state, onChange } = createStore<SavedCardsState>({
  cards: [],
  hasCards: false,
})

onChange('cards', (value) => {
  state.hasCards =
    value.filter((card) => card.status !== SavedCardTypes.FAILED).length > 0
})
