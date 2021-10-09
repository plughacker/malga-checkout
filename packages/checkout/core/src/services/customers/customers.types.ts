import { ICustomer } from '../../providers/BaseProvider'
import { Api } from '../api'

export interface CustomerConstructor {
  api: Api
  customer: ICustomer
}
