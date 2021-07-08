import axios, { AxiosRequestConfig } from 'axios'

import { PlugCheckoutRequestPayload } from './plug-checkout.types'
import {
  cleanTextOnlyNumbers,
  transformExpirationDate,
} from './plug-checkout.utils'

const axiosConfig: AxiosRequestConfig = {
  baseURL: 'https://sandbox-api.plugpagamentos.com/v1',
  headers: {
    'Content-Type': 'application/json',
  },
}

const api = axios.create(axiosConfig)

export const checkoutOneShotRequest = async (
  apiKey: string,
  clientId: string,
  data: PlugCheckoutRequestPayload,
) => {
  const headers = {
    'X-Client-Id': clientId,
    'X-Api-Key': apiKey,
  }

  const payload = {
    merchantId: data.merchantId,
    amount: data.amount,
    statementDescriptor: data.statementDescriptor,
    capture: data.capture,
    paymentMethod: {
      paymentType: 'credit',
      installments: parseInt(data.card.installments),
    },
    paymentSource: {
      sourceType: 'card',
      card: {
        cardNumber: cleanTextOnlyNumbers(data.card.cardNumber),
        cardCvv: data.card.cvv,
        cardExpirationDate: transformExpirationDate(data.card.expirationDate),
        cardHolderName: data.card.name,
      },
    },
  }

  const checkoutResponse = await api.post('/charges', payload, { headers })

  return checkoutResponse
}
