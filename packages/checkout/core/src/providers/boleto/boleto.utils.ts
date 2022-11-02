export const normalizeBoletoFees = (feesType, fees) => {
  return fees ? { [feesType]: formatBoletoFees(fees) } : {}
}

const formatBoletoFees = (fees) => {
  const days = fees.days ? { days: fees.days } : {}
  const amount = fees.amount ? { amount: fees.amount } : {}
  const percentage = fees.percentage ? { percentage: fees.percentage } : {}

  return {
    ...days,
    ...amount,
    ...percentage,
  }
}
