export interface MalgaPaymentsDripContentConstructor {
  amount: number
  debug: boolean
  sandbox: boolean
}

export interface MalgaPaymentsDripContentInstallment {
  dueDate: string
  amount: string
}
