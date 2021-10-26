export const formatToReal = (value: number) => {
  const centsToReal = value / 100

  const currency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return currency.format(centsToReal)
}
