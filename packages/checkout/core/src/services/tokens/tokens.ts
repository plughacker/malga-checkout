import settings from '../../stores/settings'
import { Api } from '../api'

import { TokenConstructor, CardData } from './tokens.types'
import { formatPayload } from './tokens.utils'

export class Tokens {
  readonly api: Api
  readonly data: CardData

  constructor({ data }: TokenConstructor) {
    this.api = new Api()
    this.data = data
  }

  public async create() {
    const response = await this.api.create({
      endpoint: settings.sessionId ? '/sessions/tokens' : '/tokens',
      data: formatPayload(this.data),
    })

    const tokenId = response.data.tokenId

    if (!tokenId) {
      return
    }

    return response.data.tokenId
  }
}
