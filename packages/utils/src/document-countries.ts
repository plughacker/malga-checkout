import { Locale } from '@plug-checkout/i18n/dist/utils'
import { getCurrentLocale } from '@plug-checkout/i18n'

const documentCountriesEnglish = [
  {
    value: 'AL',
    label: 'Albania',
  },
  {
    value: 'AD',
    label: 'Andorra',
  },
  {
    value: 'AR',
    label: 'Argentina',
  },
  {
    value: 'AT',
    label: 'Austria',
  },
  {
    value: 'AU',
    label: 'Australia',
  },
  {
    value: 'BA',
    label: 'Bosnia and Herzegovina',
  },
  {
    value: 'BZ',
    label: 'Belize',
  },
  {
    value: 'BE',
    label: 'Belgium',
  },
  {
    value: 'BG',
    label: 'Bulgaria',
  },
  {
    value: 'BY',
    label: 'Belarus',
  },
  {
    value: 'CA',
    label: 'Canada',
  },
  {
    value: 'CU',
    label: 'Cuba',
  },
  {
    value: 'CY',
    label: 'Cyprus',
  },
  {
    value: 'CZ',
    label: 'Czech Republic',
  },
  {
    value: 'CH',
    label: 'Switzerland',
  },
  {
    value: 'CL',
    label: 'Chile',
  },
  {
    value: 'CN',
    label: 'China',
  },
  {
    value: 'CO',
    label: 'Colombia',
  },
  {
    value: 'CR',
    label: 'Costa Rica',
  },
  {
    value: 'DE',
    label: 'Germany',
  },
  {
    value: 'DK',
    label: 'Denmark',
  },
  {
    value: 'DO',
    label: 'Dominican Republic',
  },
  {
    value: 'EC',
    label: 'Ecuador',
  },
  {
    value: 'EE',
    label: 'Estonia',
  },
  {
    value: 'SV',
    label: 'El Salvador',
  },
  {
    value: 'GT',
    label: 'Guatemala',
  },
  {
    value: 'FI',
    label: 'Finland',
  },
  {
    value: 'FR',
    label: 'France',
  },
  {
    value: 'GB',
    label: 'United Kingdom',
  },
  {
    value: 'GR',
    label: 'Greece',
  },
  {
    value: 'HR',
    label: 'Croatia',
  },
  {
    value: 'HK',
    label: 'Hong Kong',
  },
  {
    value: 'HU',
    label: 'Hungary',
  },
  {
    value: 'IS',
    label: 'Iceland',
  },
  {
    value: 'ID',
    label: 'Indonesia',
  },
  {
    value: 'IE',
    label: 'Ireland',
  },
  {
    value: 'IN',
    label: 'India',
  },
  {
    value: 'IL',
    label: 'Israel',
  },
  {
    value: 'IT',
    label: 'Italy',
  },
  {
    value: 'LI',
    label: 'Liechtenstein',
  },
  {
    value: 'LT',
    label: 'Lithuania',
  },
  {
    value: 'LU',
    label: 'Luxembourg',
  },
  {
    value: 'LV',
    label: 'Latvia',
  },
  {
    value: 'MK',
    label: 'Republic of Macedonia',
  },
  {
    value: 'MC',
    label: 'Monaco',
  },
  {
    value: 'MD',
    label: 'Republic of Moldova',
  },
  {
    value: 'MT',
    label: 'Malta',
  },
  {
    value: 'MU',
    label: 'Mauritius',
  },
  {
    value: 'JP',
    label: 'Japan',
  },
  {
    value: 'KR',
    label: 'South Korea',
  },
  {
    value: 'MX',
    label: 'Mexico',
  },
  {
    value: 'ME',
    label: 'Montenegro',
  },
  {
    value: 'MY',
    label: 'Malaysia',
  },
  {
    value: 'NL',
    label: 'Netherlands',
  },
  {
    value: 'NZ',
    label: 'New Zealand',
  },
  {
    value: 'NO',
    label: 'Norway',
  },
  {
    value: 'PY',
    label: 'Paraguay',
  },
  {
    value: 'PE',
    label: 'Peru',
  },
  {
    value: 'PK',
    label: 'Pakistan',
  },
  {
    value: 'PL',
    label: 'Poland',
  },
  {
    value: 'PT',
    label: 'Portugal',
  },
  {
    value: 'RU',
    label: 'Russian',
  },
  {
    value: 'RO',
    label: 'Romania',
  },
  {
    value: 'SM',
    label: 'San Marino',
  },
  {
    value: 'RS',
    label: 'Serbia',
  },
  {
    value: 'SE',
    label: 'Sweden',
  },
  {
    value: 'SG',
    label: 'Singapore',
  },
  {
    value: 'TH',
    label: 'Thailand',
  },
  {
    value: 'TW',
    label: 'Taiwan',
  },
  {
    value: 'TR',
    label: 'Turkey',
  },
  {
    value: 'SI',
    label: 'Slovenia',
  },
  {
    value: 'SK',
    label: 'Slovakia',
  },
  {
    value: 'ES',
    label: 'Spain',
  },
  {
    value: 'UY',
    label: 'Uruguay',
  },
  {
    value: 'UA',
    label: 'Ukraine',
  },
  {
    value: 'US',
    label: 'United States',
  },
  {
    value: 'VE',
    label: 'Venezuela',
  },
  {
    value: 'VN',
    label: 'Viet Nam',
  },
  {
    value: 'ZA',
    label: 'South Africa',
  },
]

const documentCountriesPortuguese = [
  {
    value: 'AL',
    label: 'Albânia',
  },
  {
    value: 'AD',
    label: 'Andorra',
  },
  {
    value: 'AR',
    label: 'Argentina',
  },
  {
    value: 'AT',
    label: 'Áustria',
  },
  {
    value: 'AU',
    label: 'Austrália',
  },
  {
    value: 'BA',
    label: 'Bósnia e Herzegovina',
  },
  {
    value: 'BZ',
    label: 'Belize',
  },
  {
    value: 'BE',
    label: 'Bélgica',
  },
  {
    value: 'BG',
    label: 'Bulgária',
  },
  {
    value: 'BR',
    label: 'Brasil',
  },
  {
    value: 'BY',
    label: 'Bielorrússia',
  },
  {
    value: 'CA',
    label: 'Canadá',
  },
  {
    value: 'CU',
    label: 'Cuba',
  },
  {
    value: 'CY',
    label: 'Chipre',
  },
  {
    value: 'CZ',
    label: 'República Tcheca',
  },
  {
    value: 'CH',
    label: 'Suiça',
  },
  {
    value: 'CL',
    label: 'Chile',
  },
  {
    value: 'CN',
    label: 'China',
  },
  {
    value: 'CO',
    label: 'Colômbia',
  },
  {
    value: 'CR',
    label: 'Costa Rica',
  },
  {
    value: 'DE',
    label: 'Alemanha',
  },
  {
    value: 'DK',
    label: 'Dinamarca',
  },
  {
    value: 'DO',
    label: 'República Dominicana',
  },
  {
    value: 'EC',
    label: 'Equador',
  },
  {
    value: 'EE',
    label: 'Estônia',
  },
  {
    value: 'SV',
    label: 'El Salvador',
  },
  {
    value: 'GT',
    label: 'Guatemala',
  },
  {
    value: 'FI',
    label: 'Finlândia',
  },
  {
    value: 'FR',
    label: 'França',
  },
  {
    value: 'GB',
    label: 'Reino Unido',
  },
  {
    value: 'GR',
    label: 'Grécia',
  },
  {
    value: 'HR',
    label: 'Croácia',
  },
  {
    value: 'HK',
    label: 'Hong Kong',
  },
  {
    value: 'HU',
    label: 'Hungria',
  },
  {
    value: 'IS',
    label: 'Islândia',
  },
  {
    value: 'ID',
    label: 'Indonésia',
  },
  {
    value: 'IE',
    label: 'Irlanda',
  },
  {
    value: 'IN',
    label: 'Índia',
  },
  {
    value: 'IL',
    label: 'Israel',
  },
  {
    value: 'IT',
    label: 'Itália',
  },
  {
    value: 'LI',
    label: 'Liechtenstein',
  },
  {
    value: 'LT',
    label: 'Lituânia',
  },
  {
    value: 'LU',
    label: 'Luxemburgo',
  },
  {
    value: 'LV',
    label: 'Letônia',
  },
  {
    value: 'MK',
    label: 'Macedônia',
  },
  {
    value: 'MC',
    label: 'Mônaco',
  },
  {
    value: 'MD',
    label: 'Moldova',
  },
  {
    value: 'MT',
    label: 'Malta',
  },
  {
    value: 'MU',
    label: 'Maurício',
  },
  {
    value: 'JP',
    label: 'Japão',
  },
  {
    value: 'KR',
    label: 'Coreia do Sul',
  },
  {
    value: 'MX',
    label: 'México',
  },
  {
    value: 'ME',
    label: 'Montenegro',
  },
  {
    value: 'MY',
    label: 'Malásia',
  },
  {
    value: 'NL',
    label: 'Holanda',
  },
  {
    value: 'NZ',
    label: 'Nova Zelândia',
  },
  {
    value: 'NO',
    label: 'Noruega',
  },
  {
    value: 'PY',
    label: 'Paraguai',
  },
  {
    value: 'PE',
    label: 'Peru',
  },
  {
    value: 'PK',
    label: 'Paquistão',
  },
  {
    value: 'PL',
    label: 'Polônia',
  },
  {
    value: 'PT',
    label: 'Portugal',
  },
  {
    value: 'RU',
    label: 'Rússia',
  },
  {
    value: 'RO',
    label: 'Romênia',
  },
  {
    value: 'SM',
    label: 'São Marino',
  },
  {
    value: 'RS',
    label: 'Sérvia',
  },
  {
    value: 'SE',
    label: 'Suécia',
  },
  {
    value: 'SG',
    label: 'Singapura',
  },
  {
    value: 'TH',
    label: 'Tailândia',
  },
  {
    value: 'TW',
    label: 'Taiwan',
  },
  {
    value: 'TR',
    label: 'Turquia',
  },
  {
    value: 'SI',
    label: 'Eslovênia',
  },
  {
    value: 'SK',
    label: 'Eslováquia',
  },
  {
    value: 'ES',
    label: 'Espanha',
  },
  {
    value: 'UY',
    label: 'Uruguai',
  },
  {
    value: 'UA',
    label: 'Ucrânia',
  },
  {
    value: 'US',
    label: 'Estados Unidos',
  },
  {
    value: 'VE',
    label: 'Venezuela',
  },
  {
    value: 'VN',
    label: 'Vietnam',
  },
  {
    value: 'ZA',
    label: 'África do Sul',
  },
]

export const documentCountries = (locale?: Locale) => {
  const currentLocale = getCurrentLocale(locale)
  const locales = {
    default: documentCountriesPortuguese,
    pt: documentCountriesPortuguese,
    en: documentCountriesEnglish,
    pt_BR: documentCountriesPortuguese,
    en_US: documentCountriesEnglish,
    'pt-BR': documentCountriesPortuguese,
    'en-US': documentCountriesEnglish,
  }

  return locales[currentLocale]
}
