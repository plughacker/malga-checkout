export const formatCurrency = (
  value: number,
  currencyFormat: string | undefined = 'BRL',
) => {
  const centsToReal = value / 100

  const currency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: currencyFormat,
  })

  return currency.format(centsToReal)
}
