import {
  PlugCheckoutDialog,
  PlugCheckoutTransaction,
  PlugCheckoutPaymentMethods,
} from '../../components/plug-checkout/plug-checkout.types'

export interface SettingsState {
  clientId: string
  publicKey: string
  idempotencyKey: string
  merchantId: string
  sandbox: boolean
  dialogConfig: PlugCheckoutDialog
  paymentMethods: PlugCheckoutPaymentMethods
  transactionConfig: PlugCheckoutTransaction
}
