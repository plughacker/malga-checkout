import { Customer } from './plug-checkout-full.types'
import { PlugCheckoutFullIdentificationFormValues } from './partials/plug-checkout-full-identification/plug-checkout-full-identification.types'

export const formatCustomer = (
  customer: PlugCheckoutFullIdentificationFormValues,
): Customer => {
  return {
    name: customer.name,
    email: customer.email,
    phoneNumber: null,
    document: {
      type: customer.documentType,
      country: customer.documentCountry,
      number: customer.identification,
    },
    address: {
      zipCode: customer.zipCode,
      street: customer.street,
      number: customer.number,
      complement: customer.complement,
      neighborhood: customer.neighborhood,
      city: customer.city,
      state: customer.state,
      country: customer.country,
    },
  }
}
