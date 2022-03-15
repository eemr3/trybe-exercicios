const validate_number = (number) => {
  if (number < 0) return "negativo";
  if (number > 0) return "positivo";
  if (number === 0) return "neutro";
  if (typeof number === "string") return "o valor deve ser um número";
};

module.exports = validate_number;
