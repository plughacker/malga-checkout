import { formatPayload as formatCustomer } from '../customers/customers.utils'
import { Customer } from '../../providers/base-provider'
import { FraudAnalysis } from './charges.types'

export const formatFraudAnalysis = (
  fraudAnalysis: FraudAnalysis,
  customer: Customer,
) => {
  if (
    !fraudAnalysis ||
    (!customer?.address && !fraudAnalysis?.customer?.address)
  )
    return null

  const currentCustomer = fraudAnalysis.customer || customer
  const parsedCustomer = formatCustomer(currentCustomer)
  const address = {
    ...parsedCustomer.address,
    number: parsedCustomer.address.streetNumber,
  }

  delete address.streetNumber

  return {
    customer: {
      name: parsedCustomer.name,
      email: parsedCustomer.email,
      phone: parsedCustomer.phoneNumber,
      identityType: parsedCustomer.document.type.toUpperCase(),
      identity: parsedCustomer.document.number,
      deliveryAddress: address,
      billingAddress: address,
    },
    cart: {
      items: fraudAnalysis.cart,
    },
  }
}
