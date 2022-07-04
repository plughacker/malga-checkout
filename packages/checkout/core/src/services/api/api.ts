import axios, { AxiosRequestConfig, AxiosInstance } from 'axios'

import { CreateParams } from './api.types'

import settings from '../../stores/settings'

export class Api {
  readonly axiosConfig: AxiosRequestConfig
  readonly api: AxiosInstance

  constructor() {
    this.axiosConfig = {
      baseURL: this.getCurrentHost(),
      headers: {
        'Content-Type': 'application/json',
        ...this.getCurrentHeaders(),
      },
    }
    this.api = axios.create(this.axiosConfig)
  }

  private getCurrentHeaders() {
    if (settings.paymentSessionKey) {
      return {}
    }

    return {
      'X-Client-Id': settings.clientId,
      'X-Api-Key': settings.publicKey,
    }
  }

  private getCurrentHost() {
    if (settings.sandbox) {
      return 'https://sandbox-api.plugpagamentos.com/v1'
    }

    return 'https://api.dev.plugpagamentos.com/v1'
  }

  public async create({ endpoint, data, headers }: CreateParams) {
    return this.api.post(endpoint, data, { headers })
  }

  public async fetch({ endpoint }: CreateParams) {
    return this.api.get(endpoint)
  }
}
