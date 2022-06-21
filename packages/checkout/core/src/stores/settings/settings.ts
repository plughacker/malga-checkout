import { createStore } from '@stencil/store'
import { v4 as uuidV4 } from 'uuid'

import { SettingsState } from './settings.types'

export const { state, onChange } = createStore<SettingsState>({
  clientId: '',
  publicKey: '',
  merchantId: '',
  idempotencyKey: '',
  paymentSessionKey: '',
  sandbox: false,
  dialogConfig: {
    show: true,
    actionButtonLabel: 'Continuar',
    successActionButtonLabel: 'Continuar',
    errorActionButtonLabel: 'Tentar Novamente',
    successRedirectUrl: '',
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
