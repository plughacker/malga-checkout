import axios, { AxiosRequestConfig } from 'axios'

import { PlugCheckoutOneShotRequest } from './plug-checkout.types'
import {
  cleanTextOnlyNumbers,
  transformExpirationDate,
} from './plug-checkout.utils'

const axiosConfig: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
}

const api = axios.create(axiosConfig)

export const checkoutOneShotRequest = async ({
  publicKey,
  clientId,
  sandbox,
  onPaymentSuccess,
  onPaymentFailed,
  data,
}: PlugCheckoutOneShotRequest) => {
  try {
    const url = sandbox
      ? 'https://sandbox-api.plugpagamentos.com/v1'
      : 'https://api.plugpagamentos.com/v1'

    const headers = {
      'X-Client-Id': clientId,
      'X-Api-Key': publicKey,
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

    const checkoutResponse = await api.post(`${url}/charges`, payload, {
      headers,
    })

    if (['failed', 'charged_back'].includes(checkoutResponse.data.status)) {
      onPaymentFailed({
        error: {
          type: checkoutResponse.data.status,
          message: 'Your transaction cannot be completed',
        },
      })

      return
    }

    onPaymentSuccess(checkoutResponse.data)
  } catch (error) {
    onPaymentFailed({ error: error.response.data.error })
  }
}
