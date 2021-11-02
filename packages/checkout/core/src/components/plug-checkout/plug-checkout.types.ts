import { Customer } from '../../providers/base-provider'
import { BoletoAttributes } from '../../providers/boleto'
import { PixAttributes } from '../../providers/pix'
import { PlugPaymentsCreditInstallmentsConfig } from '../plug-payments-credit/plug-payments-credit.types'

export interface Credit extends PlugPaymentsCreditInstallmentsConfig {
  showCreditCard: boolean
}

export interface PlugCheckoutTransaction {
  statementDescriptor: string
  amount: number
  capture: boolean
  description?: string
  orderId?: string
  customer?: Customer
  customerId?: string
  currency?: string
}

export interface PlugCheckoutPaymentMethods {
  pix?: PixAttributes
  credit?: Credit
  boleto?: BoletoAttributes
}

export interface PlugCheckoutDialog {
  show: boolean
  actionButtonLabel: string
  successActionButtonLabel: string
  errorActionButtonLabel: string
}