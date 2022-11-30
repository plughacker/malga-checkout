import { createStore } from '@stencil/store'
import { v4 as uuidV4 } from 'uuid'

import { SettingsState } from './settings.types'

export const { state, onChange } = createStore<SettingsState>({
  clientId: '',
  publicKey: '',
  sessionId: '',
  merchantId: '',
  idempotencyKey: '',
  locale: undefined,
  sandbox: false,
  debug: false,
  dialogConfig: {
    show: true,
  },
  paymentMethods: {
    pix: undefined,
    credit: undefined,
    boleto: undefined,
  },
  transactionConfig: {
    statementDescriptor: '',
    amount: 0,
    description: '',
    orderId: '',
    customerId: '',
    currency: 'BRL',
    capture: false,
    customer: null,
  },
})

onChange('idempotencyKey', (value) => {
  state.idempotencyKey = value || uuidV4()
})
