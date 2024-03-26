import { Locale } from '@malga-checkout/i18n/dist/utils'
import {
  MalgaCheckoutDialog,
  MalgaCheckoutTransaction,
  MalgaCheckoutPaymentMethods,
} from '../../components/malga-checkout/malga-checkout.types'
import { AppInfo } from '../../types/malga-app-info'

export interface SettingsState {
  clientId: string
  publicKey: string
  sessionId?: string
  automaticallyGeneratedIdempotencyKey: boolean
  idempotencyKey: string
  merchantId: string
  locale?: Locale
  sandbox: boolean
  debug: boolean
  dialogConfig: MalgaCheckoutDialog
  paymentMethods: MalgaCheckoutPaymentMethods
  transactionConfig: MalgaCheckoutTransaction
  appInfo?: AppInfo
}
