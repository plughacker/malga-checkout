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

  constructor({ amount }: MalgaPaymentsDripContentConstructor) {
    this.amount = amount / 100
    this.date = formatISODate(new Date())
  }

  public async getContent() {
    try {
      const { data } = await axios.get(
        `https://sbx-drip-be.usedrip.com.br/api/v1/instalments_simulator?amount=${this.amount}&date=${this.date}`,
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
