export const formatISODate = (currentDate: Date) => {
  const year = currentDate.toLocaleString('default', { year: 'numeric' })
  const month = currentDate.toLocaleString('default', { month: '2-digit' })
  const day = currentDate.toLocaleString('default', { day: '2-digit' })

  return `${year}-${month}-${day}`
}

export const formatDate = (currentDate: Date) => {
  const formattedDate = new Intl.DateTimeFormat('pt-BR')

  return formattedDate.format(currentDate)
}

export const parseDate = (currentDate: string) => {
  const [year, month, day] = currentDate.split('-')
  const currentMonth = parseInt(month) - 1

  return [year, currentMonth, day]
}
