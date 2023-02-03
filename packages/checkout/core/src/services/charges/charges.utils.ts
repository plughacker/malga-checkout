import { formatPayload as formatCustomer } from '../customers/customers.utils'
import { Customer } from '../../providers/base-provider'
import { FraudAnalysis } from './charges.types'

import {
  cookiesEnabled,
  getUserAgent,
  getHostname,
  getIpAddress,
} from '@malga-checkout/utils'

const formatFraudAnalysisBrowser = async (
  browserFingerprint?: string,
  email?: string,
) => {
  if (!browserFingerprint) return {}

  const ipAddress = await getIpAddress()
  const hostName = getHostname()
  const cookiesAccepted = cookiesEnabled()
  const type = getUserAgent()

  return {
    browser: {
      browserFingerprint,
      email,
      cookiesAccepted,
      hostName,
      ipAddress,
      type,
    },
  }
}

export const formatFraudAnalysis = async (
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
  const browser = await formatFraudAnalysisBrowser(
    fraudAnalysis.browserFingerprint,
    parsedCustomer.email,
  )

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
      ...browser,
    },
    cart: {
      items: fraudAnalysis.cart,
    },
  }
}
