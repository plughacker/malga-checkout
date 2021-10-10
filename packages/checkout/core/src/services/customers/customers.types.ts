import { Customer } from '../../providers/base-provider'
import { Api } from '../api'

export interface CustomerConstructor {
  api: Api
  customer: Customer
}
