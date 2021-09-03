export type CheckoutSelectFieldValue = string | number | null

export interface CheckoutSelectFieldOptions {
  value: CheckoutSelectFieldValue
  label: string
}

export interface CheckoutSelectFieldChangeEvent {
  value: string | number | undefined | null
}
