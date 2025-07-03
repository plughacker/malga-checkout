import { t } from '@malga-checkout/i18n'
import { Locale } from '@malga-checkout/i18n/dist/utils'

export const documentTypesByCountry = (locale?: Locale) => ({
  none: [],
  AL: [
    { value: 'nipt', label: 'NIPT' },
    { value: 'other', label: t('common.other', locale) },
  ],
  AD: [
    { value: 'nrt', label: 'NRT' },
    { value: 'other', label: t('common.other', locale) },
  ],
  AR: [
    { value: 'cbu', label: 'CBU' },
    { value: 'cuit', label: 'CUIT' },
    { value: 'dni', label: 'DNI' },
    { value: 'other', label: t('common.other', locale) },
  ],
  AT: [
    { value: 'businessid', label: 'Businessid' },
    { value: 'tin', label: 'TIN' },
    { value: 'uid', label: 'UID' },
    { value: 'vnr', label: 'VNR' },
    { value: 'other', label: t('common.other', locale) },
  ],
  AU: [
    { value: 'abn', label: 'ABN' },
    { value: 'acn', label: 'ACN' },
    { value: 'tfn', label: 'TFN' },
    { value: 'other', label: t('common.other', locale) },
  ],
  BA: [
    { value: 'jmbg', label: 'JMBG' },
    { value: 'other', label: t('common.other', locale) },
  ],
  BZ: [
    { value: 'tin', label: 'TIN' },
    { value: 'other', label: t('common.other', locale) },
  ],
  BE: [
    { value: 'vat', label: 'VAT' },
    { value: 'other', label: t('common.other', locale) },
  ],
  BG: [
    { value: 'egn', label: 'EGN' },
    { value: 'pnf', label: 'PNF' },
    { value: 'vat', label: 'VAT' },
    { value: 'other', label: t('common.other', locale) },
  ],
  BR: [
    { value: 'cpf', label: 'CPF' },
    { value: 'cnpj', label: 'CNPJ' },
  ],
  BY: [
    { value: 'unp', label: 'UNP' },
    { value: 'other', label: t('common.other', locale) },
  ],
  CA: [
    { value: 'bn', label: 'BN' },
    { value: 'sin', label: 'SIN' },
    { value: 'other', label: t('common.other', locale) },
  ],
  CU: [
    { value: 'ni', label: 'NI' },
    { value: 'other', label: t('common.other', locale) },
  ],
  CY: [
    { value: 'vat', label: 'VAT' },
    { value: 'other', label: t('common.other', locale) },
  ],
  CZ: [
    { value: 'dic', label: 'DIC' },
    { value: 'rc', label: 'RC' },
    { value: 'other', label: t('common.other', locale) },
  ],
  CH: [
    { value: 'ssn', label: 'SSN' },
    { value: 'uid', label: 'UID' },
    { value: 'vat', label: 'VAT' },
    { value: 'other', label: t('common.other', locale) },
  ],
  CL: [
    { value: 'rut', label: 'RUT' },
    { value: 'other', label: t('common.other', locale) },
  ],
  CN: [
    { value: 'ric', label: 'RIC' },
    { value: 'uscc', label: 'USCC' },
    { value: 'other', label: t('common.other', locale) },
  ],
  CO: [
    { value: 'nit', label: 'NIT' },
    { value: 'other', label: t('common.other', locale) },
  ],
  CR: [
    { value: 'cpf', label: 'CPF' },
    { value: 'cpj', label: 'CPJ' },
    { value: 'cr', label: 'CR' },
    { value: 'other', label: t('common.other', locale) },
  ],
  DE: [
    { value: 'idnr', label: 'IDNR' },
    { value: 'stnr', label: 'STNR' },
    { value: 'vat', label: 'VAT' },
    { value: 'other', label: t('common.other', locale) },
  ],
  DK: [
    { value: 'vat', label: 'VAT' },
    { value: 'other', label: t('common.other', locale) },
  ],
  DO: [
    { value: 'cedula', label: 'CEDULA' },
    { value: 'ncf', label: 'NCF' },
    { value: 'rnc', label: 'RNC' },
    { value: 'other', label: t('common.other', locale) },
  ],
  EC: [
    { value: 'ci', label: 'CI' },
    { value: 'ruc', label: 'RUC' },
    { value: 'other', label: t('common.other', locale) },
  ],
  EE: [
    { value: 'ik', label: 'IK' },
    { value: 'kmkr', label: 'KMKR' },
    { value: 'registrikood', label: 'Registrikood' },
    { value: 'other', label: t('common.other', locale) },
  ],
  SV: [
    { value: 'nit', label: 'NIT' },
    { value: 'other', label: t('common.other', locale) },
  ],
  GT: [
    { value: 'cui', label: 'CUI' },
    { value: 'nit', label: 'NIT' },
    { value: 'other', label: t('common.other', locale) },
  ],
  FI: [
    { value: 'alv', label: 'ALV' },
    { value: 'hetu', label: 'HETU' },
    { value: 'ytunnus', label: 'YTUNNUS' },
    { value: 'other', label: t('common.other', locale) },
  ],
  FR: [
    { value: 'nif', label: 'NIF' },
    { value: 'nir', label: 'NIR' },
    { value: 'siren', label: 'SIREN' },
    { value: 'siret', label: 'SIRET' },
    { value: 'tva', label: 'TVA' },
    { value: 'other', label: t('common.other', locale) },
  ],
  GB: [
    { value: 'utr', label: 'UTR' },
    { value: 'vat', label: 'VAT' },
    { value: 'other', label: t('common.other', locale) },
  ],
  GR: [
    { value: 'amka', label: 'AMKA' },
    { value: 'vat', label: 'VAT' },
    { value: 'other', label: t('common.other', locale) },
  ],
  HR: [
    { value: 'oib', label: 'OIB' },
    { value: 'other', label: t('common.other', locale) },
  ],
  HK: [
    { value: 'hkid', label: 'HKID' },
    { value: 'other', label: t('common.other', locale) },
  ],
  HU: [
    { value: 'anum', label: 'ANUM' },
    { value: 'other', label: t('common.other', locale) },
  ],
  IS: [
    { value: 'kennitala', label: 'KENNITALA' },
    { value: 'vsk', label: 'VSK' },
    { value: 'other', label: t('common.other', locale) },
  ],
  ID: [
    { value: 'npwp', label: 'NPWP' },
    { value: 'other', label: t('common.other', locale) },
  ],
  IE: [
    { value: 'pps', label: 'PPS' },
    { value: 'vat', label: 'VAT' },
    { value: 'other', label: t('common.other', locale) },
  ],
  IN: [
    { value: 'aadhaar', label: 'AADHAAR' },
    { value: 'pan', label: 'PAN' },
    { value: 'other', label: t('common.other', locale) },
  ],
  IL: [
    { value: 'idnr', label: 'IDNR' },
    { value: 'hr', label: 'HR' },
    { value: 'other', label: t('common.other', locale) },
  ],
  IT: [
    { value: 'aic', label: 'AIC' },
    { value: 'codicefiscale', label: 'CODICEFISCALE' },
    { value: 'iva', label: 'IVA' },
    { value: 'other', label: t('common.other', locale) },
  ],
  LI: [
    { value: 'peid', label: 'PEID' },
    { value: 'other', label: t('common.other', locale) },
  ],
  LT: [
    { value: 'asmens', label: 'ASMENS' },
    { value: 'pvm', label: 'PVM' },
    { value: 'other', label: t('common.other', locale) },
  ],
  LU: [
    { value: 'tva', label: 'TVA' },
    { value: 'other', label: t('common.other', locale) },
  ],
  LV: [
    { value: 'pvn', label: 'PVN' },
    { value: 'other', label: t('common.other', locale) },
  ],
  MK: [
    { value: 'jmbg', label: 'JMBG' },
    { value: 'other', label: t('common.other', locale) },
  ],
  MC: [
    { value: 'tva', label: 'TVA' },
    { value: 'other', label: t('common.other', locale) },
  ],
  MD: [
    { value: 'idno', label: 'IDNO' },
    { value: 'other', label: t('common.other', locale) },
  ],
  MT: [
    { value: 'vat', label: 'VAT' },
    { value: 'other', label: t('common.other', locale) },
  ],
  MU: [
    { value: 'nid', label: 'NID' },
    { value: 'other', label: t('common.other', locale) },
  ],
  JP: [
    { value: 'cn', label: 'CN' },
    { value: 'other', label: t('common.other', locale) },
  ],
  KR: [
    { value: 'brn', label: 'BRN' },
    { value: 'rrn', label: 'RRN' },
    { value: 'other', label: t('common.other', locale) },
  ],
  MX: [
    { value: 'rfc', label: 'RFC' },
    { value: 'curp', label: 'CURP' },
    { value: 'clabe', label: 'CLABE' },
    { value: 'other', label: t('common.other', locale) },
  ],
  ME: [
    { value: 'jmbg', label: 'JMBG' },
    { value: 'other', label: t('common.other', locale) },
  ],
  MY: [
    { value: 'nric', label: 'NRIC' },
    { value: 'other', label: t('common.other', locale) },
  ],
  NL: [
    { value: 'bsn', label: 'BSN' },
    { value: 'btw', label: 'BTW' },
    { value: 'onderwijsnummer', label: 'Onderwijsnummer' },
    { value: 'other', label: t('common.other', locale) },
  ],
  NZ: [
    { value: 'ird', label: 'IRD' },
    { value: 'bank', label: 'BANK' },
    { value: 'other', label: t('common.other', locale) },
  ],
  NO: [
    { value: 'fodsels', label: 'Fodsels' },
    { value: 'konto', label: 'Konto' },
    { value: 'mva', label: 'MVA' },
    { value: 'orgnr', label: 'Orgnr' },
    { value: 'other', label: t('common.other', locale) },
  ],
  PY: [
    { value: 'ruc', label: 'RUC' },
    { value: 'other', label: t('common.other', locale) },
  ],
  PE: [
    { value: 'cui', label: 'CUI' },
    { value: 'ruc', label: 'RUC' },
    { value: 'ce', label: 'CE' },
    { value: 'other', label: t('common.other', locale) },
  ],
  PK: [
    { value: 'cnic', label: 'CNIC' },
    { value: 'ntn', label: 'NTN' },
    { value: 'other', label: t('common.other', locale) },
  ],
  PL: [
    { value: 'nip', label: 'NIP' },
    { value: 'pesel', label: 'PESEL' },
    { value: 'regon', label: 'REGON' },
    { value: 'other', label: t('common.other', locale) },
  ],
  PT: [
    { value: 'nif', label: 'NIF' },
    { value: 'other', label: t('common.other', locale) },
  ],
  RU: [
    { value: 'inn', label: 'INN' },
    { value: 'other', label: t('common.other', locale) },
  ],
  RO: [
    { value: 'cf', label: 'CF' },
    { value: 'cnp', label: 'CNP' },
    { value: 'cui', label: 'CUI' },
    { value: 'onrc', label: 'ONRC' },
    { value: 'other', label: t('common.other', locale) },
  ],
  SM: [
    { value: 'coe', label: 'COE' },
    { value: 'other', label: t('common.other', locale) },
  ],
  RS: [
    { value: 'pib', label: 'PIB' },
    { value: 'jmbg', label: 'JMBG' },
    { value: 'other', label: t('common.other', locale) },
  ],
  SE: [
    { value: 'orgnr', label: 'ORGNR' },
    { value: 'personnummer', label: 'PERSONNUMMER' },
    { value: 'vat', label: 'VAT' },
    { value: 'other', label: t('common.other', locale) },
  ],
  SG: [
    { value: 'uen', label: 'UEN' },
    { value: 'other', label: t('common.other', locale) },
  ],
  TH: [
    { value: 'idnr', label: 'IDNR' },
    { value: 'other', label: t('common.other', locale) },
  ],
  TW: [
    { value: 'ubn', label: 'UBN' },
    { value: 'other', label: t('common.other', locale) },
  ],
  TR: [
    { value: 'tckimlik', label: 'TCKIMLIK' },
    { value: 'vkn', label: 'VKN' },
    { value: 'other', label: t('common.other', locale) },
  ],
  SI: [
    { value: 'ddv', label: 'DDV' },
    { value: 'jmbg', label: 'JMBG' },
    { value: 'other', label: t('common.other', locale) },
  ],
  SK: [
    { value: 'dph', label: 'DPH' },
    { value: 'rc', label: 'RC' },
    { value: 'other', label: t('common.other', locale) },
  ],
  ES: [
    { value: 'cif', label: 'CIF' },
    { value: 'dni', label: 'DNI' },
    { value: 'nie', label: 'NIE' },
    { value: 'nif', label: 'NIF' },
    { value: 'other', label: t('common.other', locale) },
  ],
  UY: [
    { value: 'rut', label: 'RUT' },
    { value: 'cedula', label: 'CEDULA' },
    { value: 'nie', label: 'NIE' },
    { value: 'other', label: t('common.other', locale) },
  ],
  UA: [
    { value: 'rntrc', label: 'RNTRC' },
    { value: 'edrpou', label: 'EDRPOU' },
    { value: 'other', label: t('common.other', locale) },
  ],
  US: [
    { value: 'ein', label: 'EIN' },
    { value: 'ssn', label: 'SSN' },
    { value: 'other', label: t('common.other', locale) },
  ],
  VE: [
    { value: 'rif', label: 'RIF' },
    { value: 'other', label: t('common.other', locale) },
  ],
  VN: [
    { value: 'mst', label: 'MST' },
    { value: 'other', label: t('common.other', locale) },
  ],
  ZA: [
    { value: 'idnr', label: 'IDNR' },
    { value: 'tin', label: 'TIN' },
    { value: 'other', label: t('common.other', locale) },
  ],
})
