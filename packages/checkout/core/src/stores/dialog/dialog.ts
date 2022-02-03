import { createStore } from '@stencil/store'

import { DialogState } from './dialog.types'

export const { state } = createStore<DialogState>({
  configs: {
    mode: 'success',
    open: false,
    amount: 0,
    paymentCode: '',
    paymentImageUrl: '',
    expirationDate: '',
    expirationTime: 0,
    successMessage: '',
    errorTitle: '',
    errorMessage: '',
  },
})
