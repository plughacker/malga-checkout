import * as Yup from 'yup'
import { isCPFOrCNPJ } from 'brazilian-values'

import { PlugCheckoutFullIdentificationFormValues } from './plug-checkout-full-identification.types'
import { normalizeValidationErrors } from './plug-checkout-full-identification.utils'

export const schema = Yup.object().shape({
  name: Yup.string().required('Nome completo é obrigatório.'),
  email: Yup.string()
    .email('Formato inválido, verifique seu e-mail.')
    .required('E-mail é obrigatório.'),
  identification: Yup.string()
    .required('CPF ou CNPJ é obrigatório.')
    .test(
      'isValidIdentification',
      'Formato inválido, verifique seu CPF ou CNPJ.',
      (value) => isCPFOrCNPJ(value),
    ),
  street: Yup.string().required('Endereço é obrigatório.'),
  number: Yup.string().required('Número é obrigatório.'),
  complement: Yup.string(),
  neighborhood: Yup.string(),
  city: Yup.string().required('Cidade é obrigatório.'),
  state: Yup.string().required('Estado é obrigatório.'),
  zipCode: Yup.string().required('CEP é obrigatório.'),
  country: Yup.string().test(
    'isValidCountry',
    'Selecione um país para continuar.',
    (value) => value !== 'none',
  ),
})

export const validateCustomer = async (
  data: Partial<PlugCheckoutFullIdentificationFormValues>,
  context?: Record<string, unknown>,
) => {
  try {
    await schema.validate(data, { abortEarly: false, context })

    return { isValid: true }
  } catch (error) {
    const errors = normalizeValidationErrors(error.inner)

    return { isValid: false, errors }
  }
}
