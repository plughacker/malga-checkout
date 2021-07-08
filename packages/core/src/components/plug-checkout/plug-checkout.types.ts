export interface PlugCheckoutFormCustomStyleFormClasses {
  formContainer?: string
  formContent?: string
  creditCardFieldContainer?: string
  creditCardFieldLabelContainer?: string
  creditCardFieldInputContainer?: string
  expirationDateFieldContainer?: string
  expirationDateFieldLabelContainer?: string
  expirationDateFieldInputContainer?: string
  cvvFieldContainer?: string
  cvvFieldLabelContainer?: string
  cvvFieldInputContainer?: string
  nameFieldContainer?: string
  nameFieldLabelContainer?: string
  nameFieldInputContainer?: string
  installmentsFieldContainer?: string
  installmentsFieldLabelContainer?: string
  installmentsFieldSelectContainer?: string
  submitButton?: string
}

export interface PlugCheckoutFormValues {
  cardNumber: string
  expirationDate: string
  cvv: string
  name: string
  installments: string
}

export interface PlugCheckoutInstallmentsConfig {
  show: boolean
  quantity: number
}
