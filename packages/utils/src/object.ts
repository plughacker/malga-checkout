export const isEmptyObject = (data: unknown) => {
  const filteredObjectProperties = Object.keys(data).length === 0

  return filteredObjectProperties
}

export const clearEmptyObjectProperties = (data: unknown) => {
  const clearedObject = Object.entries(data).filter(([, value]) => {
    if (typeof value === 'boolean' && value === true) return true

    return value && !isEmptyObject(value)
  })

  return clearedObject
}

export const clearedObjectProperties = (data: unknown) => {
  const clearedObject = clearEmptyObjectProperties(data)
  const mappedClearedObject = clearedObject.map(([key]) => key)

  return mappedClearedObject
}
