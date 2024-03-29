import { Customer } from '../../providers/base-provider'
import { BoletoAttributes } from '../../providers/boleto'
import { NuPayAttributes } from '../../providers/nupay'
import { PixAttributes } from '../../providers/pix'
import { DripAttributes } from '../../providers/drip'
import { FraudAnalysis, SplitRule } from '../../services/charges'

export interface Credit {
  installments: {
    show: boolean
    quantity: number
  }
  checkedSaveCard: boolean
  showCreditCard: boolean
  cvvCheck?: boolean
  cvvCheckMerchantId?: string
}

export interface MalgaCheckoutTransaction {
  statementDescriptor?: string
  amount?: number
  capture?: boolean
  description?: string
  orderId?: string
  customer?: Customer
  customerId?: string
  currency?: string
  fraudAnalysis?: FraudAnalysis
  splitRules?: SplitRule[]
  paymentFlowMetadata?: Record<string, unknown>
  providerReferenceKey?: string
}

export interface MalgaCheckoutPaymentMethods {
  pix?: PixAttributes
  credit?: Credit
  boleto?: BoletoAttributes
  nupay?: NuPayAttributes
  drip?: DripAttributes
}

export interface MalgaCheckoutDialog {
  show: boolean
  actionButtonLabel?: string
  successActionButtonLabel?: string
  errorActionButtonLabel?: string
  successRedirectUrl?: string
  boletoWaitingPaymentMessage?: string
  pixWaitingPaymentMessage?: string
  pixImportantMessages?: string[]
  pixFilledProgressBarColor?: string
  pixEmptyProgressBarColor?: string
}
