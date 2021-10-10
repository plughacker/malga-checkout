export const parseInstallments = (installments: string) => {
  if (!installments || installments === 'none') return 1

  return parseInt(installments)
}
