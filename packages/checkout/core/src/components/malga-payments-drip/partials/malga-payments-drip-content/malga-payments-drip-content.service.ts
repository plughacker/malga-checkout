import axios from 'axios'
import {
  formatISODate,
  formatCurrency,
  parseAmountDecimalToInteger,
} from '@malga-checkout/utils'

import { MalgaPaymentsDripContentConstructor } from './malga-payments-drip-content.types'

export class MalgaPaymentsDripContentService {
  readonly amount: number
  readonly date: Date
  readonly dripURL: string

  constructor({ amount, debug, sandbox }: MalgaPaymentsDripContentConstructor) {
    this.amount = amount / 100
    this.date = formatISODate(new Date())
    this.dripURL =
      sandbox || debug
        ? 'https://sbx-drip-be.usedrip.com.br/api/v1/instalments_simulator'
        : 'https://drip-be.usedrip.com.br/api/v1/instalments_simulator'
  }

  public async getContent() {
    try {
      const { data } = await axios.get(
        `${this.dripURL}?amount=${this.amount}&date=${this.date}`,
      )

      const parsedCashback = parseAmountDecimalToInteger(
        data.instalments[data.instalments.length - 1].cashbackAmount,
      )
      const cashback = formatCurrency(parsedCashback)

      const installments = data.instalments.map((instalment) => {
        const parsedAmount = parseAmountDecimalToInteger(instalment.amount)
        const amount = formatCurrency(parsedAmount)

        return { dueDate: instalment.dueDate, amount }
      })

      return { cashback, installments }
    } catch (error) {
      return { cashback: '', installments: [] }
    }
  }
}
