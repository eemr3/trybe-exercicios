const calc = (a, b, c) => {
  return new Promise((resolve, reject) => {
    if (typeof a === "string" || typeof b === "string" || typeof c === "string")
      return reject("Informe apenas números");
    const result = (a + b) * c;
    if (result < 50) return reject("Valor muito baixo");

    resolve(result);
  });
};

module.exports = calc;
