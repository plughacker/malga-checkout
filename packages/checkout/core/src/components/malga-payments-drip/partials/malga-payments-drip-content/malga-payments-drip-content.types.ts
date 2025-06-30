export interface MalgaPaymentsDripContentConstructor {
  amount: number
  debug: boolean
  sandbox: boolean
  clientId: string
}

export interface MalgaPaymentsDripContentInstallment {
  dueDate: string
  amount: string
}
