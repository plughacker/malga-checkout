import { Api } from '../api'

import { TokenConstructor, Data } from './tokens.types'
import { formatCardPayload } from './tokens.utils'

export class Tokens {
  readonly api: Api
  readonly data: Data

  constructor({ api, data }: TokenConstructor) {
    this.api = api
    this.data = data
  }

  private formatPayload() {
    const types = {
      card: formatCardPayload,
    }

    return types[this.data.type](this.data)
  }

  public async create() {
    const response = await this.api.create({
      endpoint: '/tokens',
      data: this.formatPayload(),
    })

    const tokenId = response.data.id

    if (!tokenId) {
      return
    }

    return response.data.id
  }
}