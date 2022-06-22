export interface SettingsResponse {
  id: string
  email: string
  phone: string
  statementDescription: string
  logo: string
  mainColor: string
  companyName: string
  clientId: string
  documentNumber: string
  language: string
}

export interface CustomizationData {
  brandUrl: string
  primaryColor: CustomizationColors
  secondaryColor: CustomizationColors
  errorColor: CustomizationColors
  warningColor: CustomizationColors
  successColor: CustomizationColors
  backgroundColor: string
}

export interface CustomizationColors {
  lightest: string
  light: string
  medium: string
  dark: string
  darkest: string
}
