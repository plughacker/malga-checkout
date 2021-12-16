import { Customer } from '../../providers/base-provider'
import { cleanTextOnlyNumbers } from '@plug-checkout/utils'

export const formatCustomerAddress = (
  customerAddress?: Customer['address'],
) => {
  if (!customerAddress) {
    return {}
  }

  return {
    address: {
      country: customerAddress.country,
      state: customerAddress.state,
      city: customerAddress.city,
      district: customerAddress.neighborhood,
      zipCode: cleanTextOnlyNumbers(customerAddress.zipCode),
      street: customerAddress.street,
      streetNumber: customerAddress.number,
      complement: customerAddress.complement,
    },
  }
}
