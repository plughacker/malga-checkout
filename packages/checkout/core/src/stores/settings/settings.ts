import { createStore } from '@stencil/store'

import { SettingsState } from './settings.types'

export const { state } = createStore<SettingsState>({
  clientId: '',
  publicKey: '',
  sessionId: '',
  merchantId: '',
  automaticallyGeneratedIdempotencyKey: true,
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
    nupay: undefined,
    drip: undefined,
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
    paymentFlowMetadata: null,
    splitRules: null,
  },
  appInfo: undefined,
})
