import {
  PlugPaymentsBoletoChargeError,
  PlugPaymentsBoletoChargeSuccess,
} from '../plug-payments-boleto/plug-payments-boleto.types'
import {
  PlugPaymentsCreditChargeError,
  PlugPaymentsCreditChargeSuccess,
} from '../plug-payments-credit/plug-payments-credit.types'
import {
  PlugPaymentsPixChargeSuccess,
  PlugPaymentsPixChargeError,
} from '../plug-payments-pix/plug-payments-pix.types'

export type PaymentMethodsType = 'credit' | 'boleto' | 'pix'

export type PaymentMethods = PaymentMethodsType[]

export type PlugPaymentsChargeSuccess =
  | PlugPaymentsBoletoChargeSuccess
  | PlugPaymentsCreditChargeSuccess
  | PlugPaymentsPixChargeSuccess

export type PlugPaymentsChargeError =
  | PlugPaymentsBoletoChargeError
  | PlugPaymentsCreditChargeError
  | PlugPaymentsPixChargeError
