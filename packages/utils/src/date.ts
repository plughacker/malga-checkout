export const formatDate = (currentDate: Date) => {
  const formattedDate = new Intl.DateTimeFormat('pt-BR')

  return formattedDate.format(currentDate)
}
