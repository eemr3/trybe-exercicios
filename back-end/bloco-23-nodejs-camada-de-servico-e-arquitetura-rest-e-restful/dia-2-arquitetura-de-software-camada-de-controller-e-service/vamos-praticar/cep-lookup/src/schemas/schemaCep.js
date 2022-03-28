const errors = {
  cep_incorret: 'CEP inválido',
  cep_blank: 'CEP não encontrado',
  length_cep: 'O CEP deve conter 8 números',
};

const blank = (value) => !value;
const longerLength = (str, value) => str.length > value;
const shorterLength = (str, value) => str.length < value;
const validFormatCep = (cep, vld) => {
  if (vld.test(cep) === false) return true;
};

const validateCEP = (cep) => {
  const validCEP = /\d{5}-?\d{3}/g;
  const cepFormat = cep.replace('-', '');

  switch (true) {
    case blank(cep):
      return { code: 'notFound', message: errors.cep_blank };
    case shorterLength(cepFormat, 8):
      return { code: 'lengthCep', message: errors.length_cep };
    case longerLength(cepFormat, 8):
      return { code: 'lengthCep', message: errors.length_cep };
    case validFormatCep(cep, validCEP):
      return { code: 'invalidData', message: errors.cep_incorret };
    default:
      return {};
  }
};

module.exports = { validateCEP };
