import { NuPayAttributes } from './nupay.types'

export const normalizeTaxValue = (nupay: NuPayAttributes) => {
  if (!nupay.taxValue) return {}

  return { taxValue: nupay.taxValue }
}
