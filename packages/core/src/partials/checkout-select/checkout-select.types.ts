export type CheckoutSelectValue = string | number | null

export interface CheckoutSelectOptions {
  value: CheckoutSelectValue
  label: string
}

export interface CheckoutSelectChangeEvent {
  value: string | number | undefined | null
}
