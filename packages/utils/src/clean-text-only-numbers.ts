export const cleanTextOnlyNumbers = (text: string) => {
  const replacedText = text.replace(/\D/g, '').trim()

  return replacedText
}
