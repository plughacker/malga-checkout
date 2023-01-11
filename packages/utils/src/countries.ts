import { getCurrentLocale } from '@malga-checkout/i18n'
import { Locale } from '@malga-checkout/i18n/dist/utils'

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
    value: 'CD',
    label: 'Democratic Republic of the Congo',
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
    value: 'KP',
    label: 'North Korea',
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
    value: 'KR',
    label: 'South Korea',
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
    value: 'DZ',
    label: 'Algéria',
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
    value: 'SA',
    label: 'Arábia Saudita',
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
    value: 'BY',
    label: 'Bielorrússia',
  },
  {
    value: 'MM',
    label: 'Birmânia',
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
    value: 'BT',
    label: 'Butão',
  },
  {
    value: 'CV',
    label: 'Cabo Verde',
  },
  {
    value: 'CM',
    label: 'Camarões',
  },
  {
    value: 'KH',
    label: 'Camboja',
  },
  {
    value: 'CA',
    label: 'Canadá',
  },
  {
    value: 'QA',
    label: 'Catar',
  },
  {
    value: 'KZ',
    label: 'Cazaquistão',
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
    value: 'CY',
    label: 'Chipre',
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
    value: 'KP',
    label: 'Coreia do Norte',
  },
  {
    value: 'KR',
    label: 'Coreia do Sul',
  },
  {
    value: 'CI',
    label: 'Costa do Marfim',
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
    value: 'CW',
    label: 'Curaçao',
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
    value: 'EG',
    label: 'Egito',
  },
  {
    value: 'SV',
    label: 'El Salvador',
  },
  {
    value: 'AE',
    label: 'Emirados Árabes',
  },
  {
    value: 'EC',
    label: 'Equador',
  },
  {
    value: 'ER',
    label: 'Eritreia',
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
    value: 'ET',
    label: 'Etiópia',
  },
  {
    value: 'FJ',
    label: 'Fiji',
  },
  {
    value: 'PH',
    label: 'Filipinas',
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
    value: 'GA',
    label: 'Gabão',
  },
  {
    value: 'GM',
    label: 'Gâmbia',
  },
  {
    value: 'GH',
    label: 'Gana',
  },
  {
    value: 'GE',
    label: 'Geórgia',
  },
  {
    value: 'GI',
    label: 'Gibraltar',
  },
  {
    value: 'GD',
    label: 'Granada',
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
    value: 'GQ',
    label: 'Guiné Equatorial',
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
    value: 'NL',
    label: 'Holanda',
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
    value: 'YE',
    label: 'Iêmen',
  },
  {
    value: 'IM',
    label: 'Ilha de Man',
  },
  {
    value: 'NF',
    label: 'Ilha Norfolk',
  },
  {
    value: 'KY',
    label: 'Ilhas Cayman',
  },
  {
    value: 'CK',
    label: 'Ilhas Cook',
  },
  {
    value: 'FO',
    label: 'Ilhas Faroe',
  },
  {
    value: 'FK',
    label: 'Ilhas Malvinas',
  },
  {
    value: 'MP',
    label: 'Ilhas Marianas do Norte',
  },
  {
    value: 'MH',
    label: 'Ilhas Marshall',
  },
  {
    value: 'PN',
    label: 'Ilhas Picárnia',
  },
  {
    value: 'SB',
    label: 'Ilhas Salomão',
  },
  {
    value: 'TC',
    label: 'Ilhas Turks e Caicos',
  },
  {
    value: 'VI',
    label: 'Ilhas Virgens (USA)',
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
    value: 'KI',
    label: 'Kiribati',
  },
  {
    value: 'KW',
    label: 'Kuwait',
  },
  {
    value: 'LA',
    label: 'Laos',
  },
  {
    value: 'LS',
    label: 'Lesoto',
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
    value: 'MY',
    label: 'Malásia',
  },
  {
    value: 'MW',
    label: 'Malawi',
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
    value: 'MA',
    label: 'Marrocos',
  },
  {
    value: 'MQ',
    label: 'Martinica',
  },
  {
    value: 'MU',
    label: 'Maurício',
  },
  {
    value: 'MR',
    label: 'Mauritânia',
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
    value: 'MZ',
    label: 'Moçambique',
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
    value: 'NO',
    label: 'Noruega',
  },
  {
    value: 'NZ',
    label: 'Nova Zelândia',
  },
  {
    value: 'OM',
    label: 'Omã',
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
    value: 'PF',
    label: 'Polinésia Francesa',
  },
  {
    value: 'PL',
    label: 'Polônia',
  },
  {
    value: 'PR',
    label: 'Porto Rico',
  },
  {
    value: 'PT',
    label: 'Portugal',
  },
  {
    value: 'KE',
    label: 'Quênia',
  },
  {
    value: 'KG',
    label: 'Quirguistão',
  },
  {
    value: 'GB',
    label: 'Reino Unido',
  },
  {
    value: 'CF',
    label: 'República Centro-Africana',
  },
  {
    value: 'SL',
    label: 'República da Serra Leoa',
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
    value: 'RW',
    label: 'Ruanda',
  },
  {
    value: 'RU',
    label: 'Rússia',
  },
  {
    value: 'WS',
    label: 'Samoa',
  },
  {
    value: 'AS',
    label: 'Samoa Americana',
  },
  {
    value: 'LC',
    label: 'Santa Lúcia',
  },
  {
    value: 'KN',
    label: 'São Cristóvão',
  },
  {
    value: 'SM',
    label: 'São Marino',
  },
  {
    value: 'SX',
    label: 'São Martinho',
  },
  {
    value: 'ST',
    label: 'Sao Tomé e Príncipe',
  },
  {
    value: 'SC',
    label: 'Seicheles',
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
    value: 'SG',
    label: 'Singapura',
  },
  {
    value: 'SY',
    label: 'Síria',
  },
  {
    value: 'SO',
    label: 'Somália',
  },
  {
    value: 'LK',
    label: 'Sri Lanka',
  },
  {
    value: 'SZ',
    label: 'Suazilândia',
  },
  {
    value: 'SD',
    label: 'Sudão',
  },
  {
    value: 'SS',
    label: 'Sudão do Sul',
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
    value: 'SR',
    label: 'Suriname',
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
    value: 'TJ',
    label: 'Tajiquistão',
  },
  {
    value: 'TZ',
    label: 'Tanzânia',
  },
  {
    value: 'IO',
    label: 'Território Britânico do Oceano Índico',
  },
  {
    value: 'TG',
    label: 'Togo',
  },
  {
    value: 'TO',
    label: 'Tonga',
  },
  {
    value: 'TK',
    label: 'Toquelau',
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
    value: 'TM',
    label: 'Turcomenistão',
  },
  {
    value: 'TR',
    label: 'Turquia',
  },
  {
    value: 'TV',
    label: 'Tuvalu',
  },
  {
    value: 'UA',
    label: 'Ucrânia',
  },
  {
    value: 'UG',
    label: 'Uganda',
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
