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
  const currentCustomer = fraudAnalysis?.customer || customer

  if (
    !fraudAnalysis ||
    (!currentCustomer?.address && !fraudAnalysis?.usePartialCustomer)
  )
    return null

  const parsedCustomer = formatCustomer(currentCustomer, true)

  const address = parsedCustomer.address && {
    ...parsedCustomer.address,
    number: parsedCustomer.address.streetNumber,
  }
  const browser = await formatFraudAnalysisBrowser(
    fraudAnalysis.browserFingerprint,
    parsedCustomer.email,
  )

  if (address) {
    delete address.streetNumber
  }

  const phone = parsedCustomer?.phoneNumber?.trim()
    ? { phone: parsedCustomer.phoneNumber }
    : {}

  return {
    customer: {
      name: parsedCustomer.name,
      email: parsedCustomer.email,
      ...(parsedCustomer.document && {
        identityType: parsedCustomer.document.type,
        identity: parsedCustomer.document.number,
      }),
      ...(currentCustomer.address && {
        deliveryAddress: address,
        billingAddress: address,
      }),
      ...phone,
      ...browser,
    },
    cart: {
      items: fraudAnalysis.cart,
    },
  }
}
