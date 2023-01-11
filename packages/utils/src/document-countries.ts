import { Locale } from '@malga-checkout/i18n/dist/utils'
import { getCurrentLocale } from '@malga-checkout/i18n'

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
    value: 'AU',
    label: 'Australia',
  },
  {
    value: 'AT',
    label: 'Austria',
  },
  {
    value: 'BY',
    label: 'Belarus',
  },
  {
    value: 'BE',
    label: 'Belgium',
  },
  {
    value: 'BZ',
    label: 'Belize',
  },
  {
    value: 'BA',
    label: 'Bosnia and Herzegovina',
  },
  {
    value: 'BR',
    label: 'Brazil',
  },
  {
    value: 'BG',
    label: 'Bulgaria',
  },
  {
    value: 'CA',
    label: 'Canada',
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
    value: 'HR',
    label: 'Croatia',
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
    value: 'SV',
    label: 'El Salvador',
  },
  {
    value: 'EE',
    label: 'Estonia',
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
    value: 'DE',
    label: 'Germany',
  },
  {
    value: 'GR',
    label: 'Greece',
  },
  {
    value: 'GT',
    label: 'Guatemala',
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
    value: 'IN',
    label: 'India',
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
    value: 'IL',
    label: 'Israel',
  },
  {
    value: 'IT',
    label: 'Italy',
  },
  {
    value: 'JP',
    label: 'Japan',
  },
  {
    value: 'LV',
    label: 'Latvia',
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
    value: 'MY',
    label: 'Malaysia',
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
    value: 'MX',
    label: 'Mexico',
  },
  {
    value: 'MC',
    label: 'Monaco',
  },
  {
    value: 'ME',
    label: 'Montenegro',
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
    value: 'PK',
    label: 'Pakistan',
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
    value: 'PL',
    label: 'Poland',
  },
  {
    value: 'PT',
    label: 'Portugal',
  },
  {
    value: 'MK',
    label: 'Republic of Macedonia',
  },
  {
    value: 'MD',
    label: 'Republic of Moldova',
  },
  {
    value: 'RO',
    label: 'Romania',
  },
  {
    value: 'RU',
    label: 'Russian',
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
    value: 'SG',
    label: 'Singapore',
  },
  {
    value: 'SK',
    label: 'Slovakia',
  },
  {
    value: 'SI',
    label: 'Slovenia',
  },
  {
    value: 'ZA',
    label: 'South Africa',
  },
  {
    value: 'KR',
    label: 'South Korea',
  },
  {
    value: 'ES',
    label: 'Spain',
  },
  {
    value: 'SE',
    label: 'Sweden',
  },
  {
    value: 'CH',
    label: 'Switzerland',
  },
  {
    value: 'TW',
    label: 'Taiwan',
  },
  {
    value: 'TH',
    label: 'Thailand',
  },
  {
    value: 'TR',
    label: 'Turkey',
  },
  {
    value: 'UA',
    label: 'Ukraine',
  },
  {
    value: 'GB',
    label: 'United Kingdom',
  },
  {
    value: 'US',
    label: 'United States',
  },
  {
    value: 'UY',
    label: 'Uruguay',
  },
  {
    value: 'VE',
    label: 'Venezuela',
  },
  {
    value: 'VN',
    label: 'Viet Nam',
  },
]

const documentCountriesPortuguese = [
  {
    value: 'ZA',
    label: 'África do Sul',
  },
  {
    value: 'AL',
    label: 'Albânia',
  },
  {
    value: 'DE',
    label: 'Alemanha',
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
    value: 'AU',
    label: 'Austrália',
  },
  {
    value: 'AT',
    label: 'Áustria',
  },
  {
    value: 'BE',
    label: 'Bélgica',
  },
  {
    value: 'BZ',
    label: 'Belize',
  },
  {
    value: 'BY',
    label: 'Bielorrússia',
  },
  {
    value: 'BA',
    label: 'Bósnia e Herzegovina',
  },
  {
    value: 'BR',
    label: 'Brasil',
  },
  {
    value: 'BG',
    label: 'Bulgária',
  },
  {
    value: 'CA',
    label: 'Canadá',
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
    value: 'CY',
    label: 'Chipre',
  },
  {
    value: 'CO',
    label: 'Colômbia',
  },
  {
    value: 'KR',
    label: 'Coreia do Sul',
  },
  {
    value: 'CR',
    label: 'Costa Rica',
  },
  {
    value: 'HR',
    label: 'Croácia',
  },
  {
    value: 'CU',
    label: 'Cuba',
  },
  {
    value: 'DK',
    label: 'Dinamarca',
  },
  {
    value: 'SV',
    label: 'El Salvador',
  },
  {
    value: 'EC',
    label: 'Equador',
  },
  {
    value: 'SK',
    label: 'Eslováquia',
  },
  {
    value: 'SI',
    label: 'Eslovênia',
  },
  {
    value: 'ES',
    label: 'Espanha',
  },
  {
    value: 'US',
    label: 'Estados Unidos',
  },
  {
    value: 'EE',
    label: 'Estônia',
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
    value: 'GR',
    label: 'Grécia',
  },
  {
    value: 'GT',
    label: 'Guatemala',
  },
  {
    value: 'NL',
    label: 'Holanda',
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
    value: 'IN',
    label: 'Índia',
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
    value: 'IS',
    label: 'Islândia',
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
    value: 'JP',
    label: 'Japão',
  },
  {
    value: 'LV',
    label: 'Letônia',
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
    value: 'MK',
    label: 'Macedônia',
  },
  {
    value: 'MY',
    label: 'Malásia',
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
    value: 'MX',
    label: 'México',
  },
  {
    value: 'MD',
    label: 'Moldova',
  },
  {
    value: 'MC',
    label: 'Mônaco',
  },
  {
    value: 'ME',
    label: 'Montenegro',
  },
  {
    value: 'NO',
    label: 'Noruega',
  },
  {
    value: 'NZ',
    label: 'Nova Zelândia',
  },
  {
    value: 'PK',
    label: 'Paquistão',
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
    value: 'PL',
    label: 'Polônia',
  },
  {
    value: 'PT',
    label: 'Portugal',
  },
  {
    value: 'GB',
    label: 'Reino Unido',
  },
  {
    value: 'DO',
    label: 'República Dominicana',
  },
  {
    value: 'CZ',
    label: 'República Tcheca',
  },
  {
    value: 'RO',
    label: 'Romênia',
  },
  {
    value: 'RU',
    label: 'Rússia',
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
    value: 'SG',
    label: 'Singapura',
  },
  {
    value: 'SE',
    label: 'Suécia',
  },
  {
    value: 'CH',
    label: 'Suiça',
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
    value: 'UA',
    label: 'Ucrânia',
  },
  {
    value: 'UY',
    label: 'Uruguai',
  },
  {
    value: 'VE',
    label: 'Venezuela',
  },
  {
    value: 'VN',
    label: 'Vietnam',
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
