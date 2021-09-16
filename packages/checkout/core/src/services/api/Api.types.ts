import { AxiosResponse, AxiosRequestConfig, AxiosInstance } from 'axios'

export interface CreateParams {
  endpoint: string
  data: unknown
}

export interface IApi {
  axiosConfig: AxiosRequestConfig
  api: AxiosInstance
  create(params: CreateParams): Promise<AxiosResponse>
}
