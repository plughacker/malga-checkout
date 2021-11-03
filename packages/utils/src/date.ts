export const formatDate = (currentDate: Date) => {
  const formattedDate = new Intl.DateTimeFormat('pt-BR')

  return formattedDate.format(currentDate)
}

export const parseDate = (currentDate: string) => {
  const [year, month, day] = currentDate.split('-')
  const currentMonth = parseInt(month) - 1

  return [year, currentMonth, day]
}
