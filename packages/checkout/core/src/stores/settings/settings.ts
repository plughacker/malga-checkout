import { createStore } from '@stencil/store'

import { SettingsState } from './settings.types'

export const { state } = createStore<SettingsState>({
  clientId: '',
  publicKey: '',
  merchantId: '',
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
