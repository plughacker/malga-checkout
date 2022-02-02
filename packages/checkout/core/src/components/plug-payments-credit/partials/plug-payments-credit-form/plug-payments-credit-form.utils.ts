import { formatToReal } from '@plug-checkout/utils'

export const centsToReal = (amount: number) => {
  if (!amount) {
    return 'R$00,00'
  }

  return formatToReal(amount)
}
