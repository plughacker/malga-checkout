export const defaultCustomStyles = {
  formContainer: '',
  formContent: '',
  creditCardFieldContainer: '',
  creditCardFieldLabelContainer: '',
  creditCardFieldInputContainer: '',
  expirationDateFieldContainer: '',
  expirationDateFieldLabelContainer: '',
  expirationDateFieldInputContainer: '',
  cvvFieldContainer: '',
  cvvFieldLabelContainer: '',
  cvvFieldInputContainer: '',
  nameFieldContainer: '',
  nameFieldLabelContainer: '',
  nameFieldInputContainer: '',
  installmentsFieldContainer: '',
  installmentsFieldLabelContainer: '',
  installmentsFieldSelectContainer: '',
  submitButton: '',
}

export const transformExpirationDate = (expiry: string) => {
  const [month, year] = expiry.split('/')

  return `${month}/20${year}`
}
