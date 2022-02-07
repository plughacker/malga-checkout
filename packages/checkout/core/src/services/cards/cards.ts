import { Api } from '../api'

import { CardConstructor } from './cards.types'

export class Cards {
  readonly api: Api
  readonly tokenId: string

  constructor({ tokenId }: CardConstructor) {
    this.api = new Api()
    this.tokenId = tokenId
  }

  public async create() {
    const response = await this.api.create({
      endpoint: '/cards',
      data: { tokenId: this.tokenId },
    })

    const cardId = response.data.id

    if (!cardId) {
      return
    }

    return response.data.id
  }
}
