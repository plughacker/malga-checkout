export const cleanTextSpecialCharacters = (text?: string) => {
  if (!text) {
    return text
  }

  const replacedText = text.replace(/[^a-zA-Z0-9]/g, '').trim()

  return replacedText
}
