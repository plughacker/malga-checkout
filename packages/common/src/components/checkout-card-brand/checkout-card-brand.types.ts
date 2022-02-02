export type CheckoutCardBrandNames =
  | 'amex'
  | 'dinersclub'
  | 'discover'
  | 'elo'
  | 'hipercard'
  | 'mastercard'
  | 'visa'

export type CheckoutCardBrandsObject = Record<CheckoutCardBrandNames, string>
