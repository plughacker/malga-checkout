import { Tokens } from '../../services/tokens'
import { Cards } from '../../services/cards'
import { Api } from '../../services/api'

export const createToken = async (api: Api, data) => {
  const tokenService = new Tokens({ api, data })
  return tokenService.create()
}

export const createCard = async (api, tokenId: string) => {
  const cardService = new Cards({ api, tokenId })
  return cardService.create()
}
