import { getCurrentLocale } from '@plug-checkout/i18n'
import { Locale } from '@plug-checkout/i18n/dist/utils'

const countriesEnglish = [
  {
    value: 'AF',
    label: 'Afghanistan',
  },
  {
    value: 'AL',
    label: 'Albania',
  },
  {
    value: 'DZ',
    label: 'Algeria',
  },
  {
    value: 'AS',
    label: 'American Samoa',
  },
  {
    value: 'AD',
    label: 'Andorra',
  },
  {
    value: 'AO',
    label: 'Angola',
  },
  {
    value: 'AI',
    label: 'Anguilla',
  },
  {
    value: 'AG',
    label: 'Antigua and Barbuda',
  },
  {
    value: 'AR',
    label: 'Argentina',
  },
  {
    value: 'AM',
    label: 'Armenia',
  },
  {
    value: 'AW',
    label: 'Aruba',
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
    value: 'AZ',
    label: 'Azerbaijan',
  },
  {
    value: 'BS',
    label: 'Bahamas',
  },
  {
    value: 'BH',
    label: 'Bahrain',
  },
  {
    value: 'BD',
    label: 'Bangladesh',
  },
  {
    value: 'BB',
    label: 'Barbados',
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
    value: 'BJ',
    label: 'Benin',
  },
  {
    value: 'BM',
    label: 'Bermuda',
  },
  {
    value: 'BT',
    label: 'Bhutan',
  },
  {
    value: 'BO',
    label: 'Bolivia',
  },
  {
    value: 'BA',
    label: 'Bosnia and Herzegovina',
  },
  {
    value: 'BW',
    label: 'Botswana',
  },
  {
    value: 'BR',
    label: 'Brazil',
  },
  {
    value: 'IO',
    label: 'British Indian Ocean Territory',
  },
  {
    value: 'BG',
    label: 'Bulgaria',
  },
  {
    value: 'BF',
    label: 'Burkina Faso',
  },
  {
    value: 'BI',
    label: 'Burundi',
  },
  {
    value: 'KH',
    label: 'Cambodia',
  },
  {
    value: 'CM',
    label: 'Cameroon',
  },
  {
    value: 'CA',
    label: 'Canada',
  },
  {
    value: 'CV',
    label: 'Cape Verde',
  },
  {
    value: 'KY',
    label: 'Cayman Islands',
  },
  {
    value: 'CF',
    label: 'Central African Republic',
  },
  {
    value: 'TD',
    label: 'Chad',
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
    value: 'KM',
    label: 'Comoros',
  },
  {
    value: 'CG',
    label: 'Congo',
  },
  {
    value: 'CD',
    label: 'Democratic Republic of the Congo',
  },
  {
    value: 'CK',
    label: 'Cook Islands',
  },
  {
    value: 'CR',
    label: 'Costa Rica',
  },
  {
    value: 'CI',
    label: "Côte d'Ivoire",
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
    value: 'CW',
    label: 'Curaçao',
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
    value: 'DJ',
    label: 'Djibouti',
  },
  {
    value: 'DM',
    label: 'Dominica',
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
    value: 'EG',
    label: 'Egypt',
  },
  {
    value: 'SV',
    label: 'El Salvador',
  },
  {
    value: 'GQ',
    label: 'Equatorial Guinea',
  },
  {
    value: 'ER',
    label: 'Eritrea',
  },
  {
    value: 'EE',
    label: 'Estonia',
  },
  {
    value: 'ET',
    label: 'Ethiopia',
  },
  {
    value: 'FK',
    label: 'Falkland Islands (Malvinas)',
  },
  {
    value: 'FO',
    label: 'Faroe Islands',
  },
  {
    value: 'FJ',
    label: 'Fiji',
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
    value: 'PF',
    label: 'French Polynesia',
  },
  {
    value: 'GA',
    label: 'Gabon',
  },
  {
    value: 'GM',
    label: 'Gambia',
  },
  {
    value: 'GE',
    label: 'Georgia',
  },
  {
    value: 'DE',
    label: 'Germany',
  },
  {
    value: 'GH',
    label: 'Ghana',
  },
  {
    value: 'GI',
    label: 'Gibraltar',
  },
  {
    value: 'GR',
    label: 'Greece',
  },
  {
    value: 'GL',
    label: 'Greenland',
  },
  {
    value: 'GD',
    label: 'Grenada',
  },
  {
    value: 'GU',
    label: 'Guam',
  },
  {
    value: 'GT',
    label: 'Guatemala',
  },
  {
    value: 'GG',
    label: 'Guernsey',
  },
  {
    value: 'GN',
    label: 'Guinea',
  },
  {
    value: 'GW',
    label: 'Guinea-Bissau',
  },
  {
    value: 'HT',
    label: 'Haiti',
  },
  {
    value: 'HN',
    label: 'Honduras',
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
    value: 'IR',
    label: 'Iran',
  },
  {
    value: 'IQ',
    label: 'Iraq',
  },
  {
    value: 'IE',
    label: 'Ireland',
  },
  {
    value: 'IM',
    label: 'Isle of Man',
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
    value: 'JM',
    label: 'Jamaica',
  },
  {
    value: 'JP',
    label: 'Japan',
  },
  {
    value: 'JE',
    label: 'Jersey',
  },
  {
    value: 'JO',
    label: 'Jordan',
  },
  {
    value: 'KZ',
    label: 'Kazakhstan',
  },
  {
    value: 'KE',
    label: 'Kenya',
  },
  {
    value: 'KI',
    label: 'Kiribati',
  },
  {
    value: 'KP',
    label: 'North Korea',
  },
  {
    value: 'KR',
    label: 'South Korea',
  },
  {
    value: 'KW',
    label: 'Kuwait',
  },
  {
    value: 'KG',
    label: 'Kyrgyzstan',
  },
  {
    value: 'LA',
    label: "Lao People's Democratic Republic",
  },
  {
    value: 'LV',
    label: 'Latvia',
  },
  {
    value: 'LB',
    label: 'Lebanon',
  },
  {
    value: 'LS',
    label: 'Lesotho',
  },
  {
    value: 'LR',
    label: 'Liberia',
  },
  {
    value: 'LY',
    label: 'Libya',
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
    value: 'MO',
    label: 'Macao',
  },
  {
    value: 'MK',
    label: 'Republic of Macedonia',
  },
  {
    value: 'MG',
    label: 'Madagascar',
  },
  {
    value: 'MW',
    label: 'Malawi',
  },
  {
    value: 'MY',
    label: 'Malaysia',
  },
  {
    value: 'MV',
    label: 'Maldives',
  },
  {
    value: 'ML',
    label: 'Mali',
  },
  {
    value: 'MT',
    label: 'Malta',
  },
  {
    value: 'MH',
    label: 'Marshall Islands',
  },
  {
    value: 'MQ',
    label: 'Martinique',
  },
  {
    value: 'MR',
    label: 'Mauritania',
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
    value: 'FM',
    label: 'Micronesia',
  },
  {
    value: 'MD',
    label: 'Republic of Moldova',
  },
  {
    value: 'MC',
    label: 'Monaco',
  },
  {
    value: 'MN',
    label: 'Mongolia',
  },
  {
    value: 'ME',
    label: 'Montenegro',
  },
  {
    value: 'MS',
    label: 'Montserrat',
  },
  {
    value: 'MA',
    label: 'Morocco',
  },
  {
    value: 'MZ',
    label: 'Mozambique',
  },
  {
    value: 'MM',
    label: 'Myanmar',
  },
  {
    value: 'NA',
    label: 'Namibia',
  },
  {
    value: 'NR',
    label: 'Nauru',
  },
  {
    value: 'NP',
    label: 'Nepal',
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
    value: 'NI',
    label: 'Nicaragua',
  },
  {
    value: 'NE',
    label: 'Niger',
  },
  {
    value: 'NG',
    label: 'Nigeria',
  },
  {
    value: 'NU',
    label: 'Niue',
  },
  {
    value: 'NF',
    label: 'Norfolk Island',
  },
  {
    value: 'MP',
    label: 'Northern Mariana Islands',
  },
  {
    value: 'NO',
    label: 'Norway',
  },
  {
    value: 'OM',
    label: 'Oman',
  },
  {
    value: 'PK',
    label: 'Pakistan',
  },
  {
    value: 'PW',
    label: 'Palau',
  },
  {
    value: 'PS',
    label: 'Palestinian Territory',
  },
  {
    value: 'PA',
    label: 'Panama',
  },
  {
    value: 'PG',
    label: 'Papua New Guinea',
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
    value: 'PH',
    label: 'Philippines',
  },
  {
    value: 'PN',
    label: 'Pitcairn',
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
    value: 'PR',
    label: 'Puerto Rico',
  },
  {
    value: 'QA',
    label: 'Qatar',
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
    value: 'RW',
    label: 'Rwanda',
  },
  {
    value: 'KN',
    label: 'Saint Kitts and Nevis',
  },
  {
    value: 'LC',
    label: 'Saint Lucia',
  },
  {
    value: 'WS',
    label: 'Samoa',
  },
  {
    value: 'SM',
    label: 'San Marino',
  },
  {
    value: 'ST',
    label: 'Sao Tome and Principe',
  },
  {
    value: 'SA',
    label: 'Saudi Arabia',
  },
  {
    value: 'SN',
    label: 'Senegal',
  },
  {
    value: 'RS',
    label: 'Serbia',
  },
  {
    value: 'SC',
    label: 'Seychelles',
  },
  {
    value: 'SL',
    label: 'Sierra Leone',
  },
  {
    value: 'SG',
    label: 'Singapore',
  },
  {
    value: 'SX',
    label: 'Sint Maarten',
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
    value: 'SB',
    label: 'Solomon Islands',
  },
  {
    value: 'SO',
    label: 'Somalia',
  },
  {
    value: 'ZA',
    label: 'South Africa',
  },
  {
    value: 'SS',
    label: 'South Sudan',
  },
  {
    value: 'ES',
    label: 'Spain',
  },
  {
    value: 'LK',
    label: 'Sri Lanka',
  },
  {
    value: 'SD',
    label: 'Sudan',
  },
  {
    value: 'SR',
    label: 'Suriname',
  },
  {
    value: 'SZ',
    label: 'Swaziland',
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
    value: 'SY',
    label: 'Syria',
  },
  {
    value: 'TW',
    label: 'Taiwan',
  },
  {
    value: 'TJ',
    label: 'Tajikistan',
  },
  {
    value: 'TZ',
    label: 'Tanzania',
  },
  {
    value: 'TH',
    label: 'Thailand',
  },
  {
    value: 'TG',
    label: 'Togo',
  },
  {
    value: 'TK',
    label: 'Tokelau',
  },
  {
    value: 'TO',
    label: 'Tonga',
  },
  {
    value: 'TT',
    label: 'Trinidad and Tobago',
  },
  {
    value: 'TN',
    label: 'Tunisia',
  },
  {
    value: 'TR',
    label: 'Turkey',
  },
  {
    value: 'TM',
    label: 'Turkmenistan',
  },
  {
    value: 'TC',
    label: 'Turks and Caicos Islands',
  },
  {
    value: 'TV',
    label: 'Tuvalu',
  },
  {
    value: 'UG',
    label: 'Uganda',
  },
  {
    value: 'UA',
    label: 'Ukraine',
  },
  {
    value: 'AE',
    label: 'United Arab Emirates',
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
    value: 'UZ',
    label: 'Uzbekistan',
  },
  {
    value: 'VU',
    label: 'Vanuatu',
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
    value: 'VI',
    label: 'Virgin Islands',
  },
  {
    value: 'YE',
    label: 'Yemen',
  },
  {
    value: 'ZM',
    label: 'Zambia',
  },
  {
    value: 'ZW',
    label: 'Zimbabwe',
  },
]

const countriesPortuguese = [
  {
    value: 'AF',
    label: 'Afeganistão',
  },
  {
    value: 'AL',
    label: 'Albânia',
  },
  {
    value: 'DZ',
    label: 'Algéria',
  },
  {
    value: 'AS',
    label: 'Samoa Americana',
  },
  {
    value: 'AD',
    label: 'Andorra',
  },
  {
    value: 'AO',
    label: 'Angola',
  },
  {
    value: 'AI',
    label: 'Anguilla',
  },
  {
    value: 'AG',
    label: 'Antigua e Barbuda',
  },
  {
    value: 'AR',
    label: 'Argentina',
  },
  {
    value: 'AM',
    label: 'Armênia',
  },
  {
    value: 'AW',
    label: 'Aruba',
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
    value: 'AZ',
    label: 'Azerbaijão',
  },
  {
    value: 'BS',
    label: 'Bahamas',
  },
  {
    value: 'BH',
    label: 'Bahrein',
  },
  {
    value: 'BD',
    label: 'Bangladesh',
  },
  {
    value: 'BB',
    label: 'Barbados',
  },
  {
    value: 'BY',
    label: 'Bielorrússia',
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
    value: 'BJ',
    label: 'Benin',
  },
  {
    value: 'BM',
    label: 'Bermuda',
  },
  {
    value: 'BT',
    label: 'Butão',
  },
  {
    value: 'BO',
    label: 'Bolívia',
  },
  {
    value: 'BA',
    label: 'Bósnia e Herzegovina',
  },
  {
    value: 'BW',
    label: 'Botswana',
  },
  {
    value: 'BR',
    label: 'Brasil',
  },
  {
    value: 'IO',
    label: 'Território Britânico do Oceano Índico',
  },
  {
    value: 'BG',
    label: 'Bulgária',
  },
  {
    value: 'BF',
    label: 'Burkina Faso',
  },
  {
    value: 'BI',
    label: 'Burundi',
  },
  {
    value: 'KH',
    label: 'Camboja',
  },
  {
    value: 'CM',
    label: 'Camarões',
  },
  {
    value: 'CA',
    label: 'Canadá',
  },
  {
    value: 'CV',
    label: 'Cabo Verde',
  },
  {
    value: 'KY',
    label: 'Ilhas Cayman',
  },
  {
    value: 'CF',
    label: 'República Centro-Africana',
  },
  {
    value: 'TD',
    label: 'Chade',
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
    value: 'KM',
    label: 'Comores',
  },
  {
    value: 'CG',
    label: 'Congo',
  },
  {
    value: 'CD',
    label: 'Congo (DR)',
  },
  {
    value: 'CK',
    label: 'Ilhas Cook',
  },
  {
    value: 'CR',
    label: 'Costa Rica',
  },
  {
    value: 'CI',
    label: 'Costa do Marfim',
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
    value: 'CW',
    label: 'Curaçao',
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
    value: 'DK',
    label: 'Dinamarca',
  },
  {
    value: 'DJ',
    label: 'Djibuti',
  },
  {
    value: 'DM',
    label: 'Dominica',
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
    value: 'EG',
    label: 'Egito',
  },
  {
    value: 'SV',
    label: 'El Salvador',
  },
  {
    value: 'GQ',
    label: 'Guiné Equatorial',
  },
  {
    value: 'ER',
    label: 'Eritreia',
  },
  {
    value: 'EE',
    label: 'Estônia',
  },
  {
    value: 'ET',
    label: 'Etiópia',
  },
  {
    value: 'FK',
    label: 'Ilhas Malvinas',
  },
  {
    value: 'FO',
    label: 'Ilhas Faroe',
  },
  {
    value: 'FJ',
    label: 'Fiji',
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
    value: 'PF',
    label: 'Polinésia Francesa',
  },
  {
    value: 'GA',
    label: 'Gabão',
  },
  {
    value: 'GM',
    label: 'Gâmbia',
  },
  {
    value: 'GE',
    label: 'Geórgia',
  },
  {
    value: 'DE',
    label: 'Alemanha',
  },
  {
    value: 'GH',
    label: 'Gana',
  },
  {
    value: 'GI',
    label: 'Gibraltar',
  },
  {
    value: 'GR',
    label: 'Grécia',
  },
  {
    value: 'GL',
    label: 'Groelândia',
  },
  {
    value: 'GD',
    label: 'Granada',
  },
  {
    value: 'GU',
    label: 'Guão',
  },
  {
    value: 'GT',
    label: 'Guatemala',
  },
  {
    value: 'GG',
    label: 'Guernsey',
  },
  {
    value: 'GN',
    label: 'Guiné',
  },
  {
    value: 'GW',
    label: 'Guiné-Bissau',
  },
  {
    value: 'HT',
    label: 'Haiti',
  },
  {
    value: 'HN',
    label: 'Honduras',
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
    value: 'IN',
    label: 'Índia',
  },
  {
    value: 'ID',
    label: 'Indonésia',
  },
  {
    value: 'IR',
    label: 'Iran',
  },
  {
    value: 'IQ',
    label: 'Iraque',
  },
  {
    value: 'IE',
    label: 'Irlanda',
  },
  {
    value: 'IM',
    label: 'Ilha de Man',
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
    value: 'JM',
    label: 'Jamaica',
  },
  {
    value: 'JP',
    label: 'Japão',
  },
  {
    value: 'JE',
    label: 'Jersey',
  },
  {
    value: 'JO',
    label: 'Jordânia',
  },
  {
    value: 'KZ',
    label: 'Cazaquistão',
  },
  {
    value: 'KE',
    label: 'Quênia',
  },
  {
    value: 'KI',
    label: 'Kiribati',
  },
  {
    value: 'KP',
    label: 'Coreia do Norte',
  },
  {
    value: 'KR',
    label: 'Coreia do Sul',
  },
  {
    value: 'KW',
    label: 'Kuwait',
  },
  {
    value: 'KG',
    label: 'Quirguistão',
  },
  {
    value: 'LA',
    label: 'Laos',
  },
  {
    value: 'LV',
    label: 'Letônia',
  },
  {
    value: 'LB',
    label: 'Líbano',
  },
  {
    value: 'LS',
    label: 'Lesoto',
  },
  {
    value: 'LR',
    label: 'Libéria',
  },
  {
    value: 'LY',
    label: 'Líbia',
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
    value: 'MO',
    label: 'Macao',
  },
  {
    value: 'MK',
    label: 'Macedônia',
  },
  {
    value: 'MG',
    label: 'Madagascar',
  },
  {
    value: 'MW',
    label: 'Malawi',
  },
  {
    value: 'MY',
    label: 'Malásia',
  },
  {
    value: 'MV',
    label: 'Maldivas',
  },
  {
    value: 'ML',
    label: 'Mali',
  },
  {
    value: 'MT',
    label: 'Malta',
  },
  {
    value: 'MH',
    label: 'Ilhas Marshall',
  },
  {
    value: 'MQ',
    label: 'Martinica',
  },
  {
    value: 'MR',
    label: 'Mauritânia',
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
    value: 'FM',
    label: 'Micronésia',
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
    value: 'MN',
    label: 'Mongólia',
  },
  {
    value: 'ME',
    label: 'Montenegro',
  },
  {
    value: 'MS',
    label: 'Montserrat',
  },
  {
    value: 'MA',
    label: 'Marrocos',
  },
  {
    value: 'MZ',
    label: 'Moçambique',
  },
  {
    value: 'MM',
    label: 'Birmânia',
  },
  {
    value: 'NA',
    label: 'Namíbia',
  },
  {
    value: 'NR',
    label: 'Nauru',
  },
  {
    value: 'NP',
    label: 'Nepal',
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
    value: 'NI',
    label: 'Nicarágua',
  },
  {
    value: 'NE',
    label: 'Niger',
  },
  {
    value: 'NG',
    label: 'Nigéria',
  },
  {
    value: 'NU',
    label: 'Niue',
  },
  {
    value: 'NF',
    label: 'Ilha Norfolk',
  },
  {
    value: 'MP',
    label: 'Ilhas Marianas do Norte',
  },
  {
    value: 'NO',
    label: 'Noruega',
  },
  {
    value: 'OM',
    label: 'Omã',
  },
  {
    value: 'PK',
    label: 'Paquistão',
  },
  {
    value: 'PW',
    label: 'Palau',
  },
  {
    value: 'PS',
    label: 'Palestina',
  },
  {
    value: 'PA',
    label: 'Panamá',
  },
  {
    value: 'PG',
    label: 'Papua-Nova Guiné',
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
    value: 'PH',
    label: 'Filipinas',
  },
  {
    value: 'PN',
    label: 'Ilhas Picárnia',
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
    value: 'PR',
    label: 'Porto Rico',
  },
  {
    value: 'QA',
    label: 'Catar',
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
    value: 'RW',
    label: 'Ruanda',
  },
  {
    value: 'KN',
    label: 'São Cristóvão',
  },
  {
    value: 'LC',
    label: 'Santa Lúcia',
  },
  {
    value: 'WS',
    label: 'Samoa',
  },
  {
    value: 'SM',
    label: 'São Marino',
  },
  {
    value: 'ST',
    label: 'Sao Tomé e Príncipe',
  },
  {
    value: 'SA',
    label: 'Arábia Saudita',
  },
  {
    value: 'SN',
    label: 'Senegal',
  },
  {
    value: 'RS',
    label: 'Sérvia',
  },
  {
    value: 'SC',
    label: 'Seicheles',
  },
  {
    value: 'SL',
    label: 'República da Serra Leoa',
  },
  {
    value: 'SG',
    label: 'Singapura',
  },
  {
    value: 'SX',
    label: 'São Martinho',
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
    value: 'SB',
    label: 'Ilhas Salomão',
  },
  {
    value: 'SO',
    label: 'Somália',
  },
  {
    value: 'ZA',
    label: 'África do Sul',
  },
  {
    value: 'SS',
    label: 'Sudão do Sul',
  },
  {
    value: 'ES',
    label: 'Espanha',
  },
  {
    value: 'LK',
    label: 'Sri Lanka',
  },
  {
    value: 'SD',
    label: 'Sudão',
  },
  {
    value: 'SR',
    label: 'Suriname',
  },
  {
    value: 'SZ',
    label: 'Suazilândia',
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
    value: 'SY',
    label: 'Síria',
  },
  {
    value: 'TW',
    label: 'Taiwan',
  },
  {
    value: 'TJ',
    label: 'Tajiquistão',
  },
  {
    value: 'TZ',
    label: 'Tanzânia',
  },
  {
    value: 'TH',
    label: 'Tailândia',
  },
  {
    value: 'TG',
    label: 'Togo',
  },
  {
    value: 'TK',
    label: 'Toquelau',
  },
  {
    value: 'TO',
    label: 'Tonga',
  },
  {
    value: 'TT',
    label: 'Trinidad e Tobago',
  },
  {
    value: 'TN',
    label: 'Tunísia',
  },
  {
    value: 'TR',
    label: 'Turquia',
  },
  {
    value: 'TM',
    label: 'Turcomenistão',
  },
  {
    value: 'TC',
    label: 'Ilhas Turks e Caicos',
  },
  {
    value: 'TV',
    label: 'Tuvalu',
  },
  {
    value: 'UG',
    label: 'Uganda',
  },
  {
    value: 'UA',
    label: 'Ucrânia',
  },
  {
    value: 'AE',
    label: 'Emirados Árabes',
  },
  {
    value: 'GB',
    label: 'Reino Unido',
  },
  {
    value: 'US',
    label: 'Estados Unidos',
  },
  {
    value: 'UY',
    label: 'Uruguai',
  },
  {
    value: 'UZ',
    label: 'Uzbequistão',
  },
  {
    value: 'VU',
    label: 'Vanuatu',
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
    value: 'VI',
    label: 'Ilhas Virgens (USA)',
  },
  {
    value: 'YE',
    label: 'Iêmen',
  },
  {
    value: 'ZM',
    label: 'Zâmbia',
  },
  {
    value: 'ZW',
    label: 'Zimbábue',
  },
]

export const countries = (locale?: Locale) => {
  const currentLocale = getCurrentLocale(locale)
  const locales = {
    default: countriesPortuguese,
    pt: countriesPortuguese,
    en: countriesEnglish,
    pt_BR: countriesPortuguese,
    en_US: countriesEnglish,
    'pt-BR': countriesPortuguese,
    'en-US': countriesEnglish,
  }

  return locales[currentLocale]
}
