export const transformExpirationDate = (expiry: string) => {
  const [month, year] = expiry.split('/')

  return `${month}/20${year}`
}
