import { Customer } from '../../providers/base-provider'
import { BoletoAttributes } from '../../providers/boleto'
import { PixAttributes } from '../../providers/pix'
import { FraudAnalysis } from '../../services/charges'

export interface Credit {
  installments: {
    show: boolean
    quantity: number
  }
  checkedSaveCard: boolean
  showCreditCard: boolean
}

export interface PlugCheckoutTransaction {
  statementDescriptor?: string
  amount: number
  capture: boolean
  description?: string
  orderId?: string
  customer?: Customer
  customerId?: string
  currency?: string
  fraudAnalysis?: FraudAnalysis
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
  successRedirectUrl: string
  boletoWaitingPaymentMessage?: string
  pixWaitingPaymentMessage?: string
  pixImportantMessages?: string[]
  pixFilledProgressBarColor?: string
  pixEmptyProgressBarColor?: string
}
