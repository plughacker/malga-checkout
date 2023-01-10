export type MalgaPaymentsPaymentSource =
  | MalgaPaymentsPaymentSourceCard
  | MalgaPaymentsPaymentSourceCustomer

export interface MalgaPaymentsPaymentSourceCard {
  sourceType: string
  cardId: string
}

export interface MalgaPaymentsPaymentSourceCustomer {
  sourceType: string
  customerId: string
}
