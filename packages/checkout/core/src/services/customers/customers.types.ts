import { ICustomer } from '../../providers/base-provider'
import { Api } from '../api'

export interface CustomerConstructor {
  api: Api
  customer: ICustomer
}
