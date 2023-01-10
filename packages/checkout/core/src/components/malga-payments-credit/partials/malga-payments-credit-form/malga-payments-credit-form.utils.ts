import { formatCurrency } from '@malga-checkout/utils'

export const centsToReal = (amount: number, currency: string) => {
  if (!amount) {
    return 'R$00,00'
  }

  return formatCurrency(amount, currency)
}
