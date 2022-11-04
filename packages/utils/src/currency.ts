export const formatCurrency = (
  value: number,
  currencyFormat: string | undefined = 'BRL',
) => {
  const currenciesWithoutDecimal = [
    'YER',
    'AFN',
    'ALL',
    'BIF',
    'CLP',
    'DJF',
    'GNF',
    'ISK',
    'JPY',
    'KMF',
    'KRW',
    'LAK',
    'LBP',
    'MGA',
    'MMK',
    'MRO',
    'PYG',
    'RSD',
    'RWF',
    'SLL',
    'SOS',
    'STD',
    'UGX',
    'VND',
    'VUV',
    'XAF',
    'XOF',
    'XPF',
  ]

  const currentValue = currenciesWithoutDecimal.includes(currencyFormat)
    ? value
    : value / 100

  const currency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: currencyFormat,
  })

  return currency.format(currentValue)
}
