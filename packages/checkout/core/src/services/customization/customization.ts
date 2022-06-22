import { Api } from '../api'

import { formatData } from './customization.utils'

export class Customization {
  readonly api: Api

  constructor() {
    this.api = new Api()
  }

  public async find() {
    const response = await this.api.fetch({ endpoint: '/settings' })

    if (!response.data) return { data: null, hasError: true }

    const data = formatData(response.data)

    return { data, hasError: false }
  }
}
