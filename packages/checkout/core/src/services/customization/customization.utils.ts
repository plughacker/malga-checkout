import Matercolors from 'matercolors'

import { SettingsResponse } from './customization.types'

const getColorPalette = (color: string) => {
  const Color = new Matercolors(color)

  const colorPalette = {
    lightest: Color[50],
    light: Color[300],
    medium: Color[500],
    dark: Color[700],
    darkest: Color[900],
  }

  return colorPalette
}

export const formatData = (data: SettingsResponse) => {
  const primaryColor = getColorPalette('#34C759')
  const secondaryColor = getColorPalette('#34C759')
  const errorColor = getColorPalette('#DD183C')
  const warningColor = getColorPalette('#FAC30E')
  const successColor = getColorPalette('#32C000')
  const backgroundColor = '#FFFFFF'
  const brandUrl = data.logo

  return {
    brandUrl,
    primaryColor,
    secondaryColor,
    errorColor,
    warningColor,
    successColor,
    backgroundColor,
  }
}
