import type { PixAttributes } from './pix.types'

export const getItems = (pix: PixAttributes) => {
  if (!pix.items || !pix.items?.length) return {}

  return {
    items: pix.items,
  }
}
