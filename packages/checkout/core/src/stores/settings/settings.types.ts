import { Locale } from '@plug-checkout/i18n/dist/utils'
import {
  PlugCheckoutDialog,
  PlugCheckoutTransaction,
  PlugCheckoutPaymentMethods,
} from '../../components/plug-checkout/plug-checkout.types'

export interface SettingsState {
  clientId: string
  publicKey: string
  sessionId?: string
  idempotencyKey: string
  merchantId: string
  locale?: Locale
  sandbox: boolean
  debug: boolean
  dialogConfig: PlugCheckoutDialog
  paymentMethods: PlugCheckoutPaymentMethods
  transactionConfig: PlugCheckoutTransaction
}
