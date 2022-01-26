import { Api } from '../api'

import { TokenConstructor, Data } from './tokens.types'
import { formatPayload } from './tokens.utils'

export class Tokens {
  readonly api: Api
  readonly data: Data

  constructor({ api, data }: TokenConstructor) {
    this.api = api
    this.data = data
  }

  public async create() {
    const response = await this.api.create({
      endpoint: '/tokens',
      data: formatPayload(this.data),
    })

    const tokenId = response.data.id

    if (!tokenId) {
      return
    }

    return response.data.id
  }
}
