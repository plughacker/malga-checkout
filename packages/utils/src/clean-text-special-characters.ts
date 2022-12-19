export const cleanTextSpecialCharacters = (text: string) => {
  const replacedText = text.replace(/[^a-zA-Z0-9]/g, '').trim()

  return replacedText
}
