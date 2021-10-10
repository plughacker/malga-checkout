import axios, { AxiosRequestConfig, AxiosInstance } from 'axios'

import { CreateParams } from './api.types'

export class Api {
  readonly axiosConfig: AxiosRequestConfig
  readonly api: AxiosInstance

  constructor(clientId: string, publicKey: string, sandbox: boolean) {
    this.axiosConfig = {
      baseURL: this.getCurrentHost(sandbox),
      headers: {
        'Content-Type': 'application/json',
        'X-Client-Id': clientId,
        'X-Api-Key': publicKey,
      },
    }
    this.api = axios.create(this.axiosConfig)
  }

  private getCurrentHost(sandbox: boolean) {
    if (sandbox) {
      return 'https://sandbox-api.plugpagamentos.com/v1'
    }

    return 'https://api.plugpagamentos.com/v1'
  }

  public async create({ endpoint, data }: CreateParams) {
    return this.api.post(endpoint, data)
  }
}
