export const cleanObjectProperties = <DataType>(data: DataType) => {
  const objectToArray = Object.entries(data)
  const filteredFalseValues = objectToArray.filter(
    ([, value]) => typeof value === 'boolean' || !!value,
  )
  const tranformArrayToObject = filteredFalseValues.reduce(
    (object, [key, value]) => ({ ...object, [key]: value }),
    {},
  )

  return tranformArrayToObject
}
