import { Locale } from '@malga-checkout/i18n/dist/utils'
import {
  MalgaCheckoutDialog,
  MalgaCheckoutTransaction,
  MalgaCheckoutPaymentMethods,
} from '../../components/malga-checkout/malga-checkout.types'

export interface SettingsState {
  clientId: string
  publicKey: string
  sessionId?: string
  idempotencyKey: string
  merchantId: string
  locale?: Locale
  sandbox: boolean
  debug: boolean
  dialogConfig: MalgaCheckoutDialog
  paymentMethods: MalgaCheckoutPaymentMethods
  transactionConfig: MalgaCheckoutTransaction
}
