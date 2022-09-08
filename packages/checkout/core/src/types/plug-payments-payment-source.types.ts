export type PlugPaymentsPaymentSource = PlugPaymentsPaymentSourceCard |
  PlugPaymentsPaymentSourceCustomer

export interface PlugPaymentsPaymentSourceCard {
  sourceType: string
  cardId: string
}

export interface PlugPaymentsPaymentSourceCustomer {
  sourceType: string
  customerId: string
}
