import { Api } from '../api'
import settings from '../../stores/settings'

import { CardConstructor } from './cards.types'

import { getZeroDollar } from './cards.utils'

export class Cards {
  readonly api: Api
  readonly tokenId: string

  constructor({ tokenId }: CardConstructor) {
    this.api = new Api()
    this.tokenId = tokenId
  }

  public async create() {
    const zeroDollar = getZeroDollar()

    const response = await this.api.create({
      endpoint: settings.sessionId ? '/sessions/cards' : '/cards',
      data: { tokenId: this.tokenId, ...zeroDollar },
    })

    const cardId = response.data.id

    if (!cardId) {
      return
    }

    return response.data.id
  }
}
