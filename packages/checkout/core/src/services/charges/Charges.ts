import { Api } from '../api'

import { ICharges, Provider, ChargeConstructor } from './Charges.types'

export class Charges implements ICharges {
  readonly api: Api
  readonly provider: Provider

  constructor({ clientId, publicKey, sandbox, provider }: ChargeConstructor) {
    this.api = new Api(clientId, publicKey, sandbox)
    this.provider = provider
  }

  public async create() {
    return
  }
}
