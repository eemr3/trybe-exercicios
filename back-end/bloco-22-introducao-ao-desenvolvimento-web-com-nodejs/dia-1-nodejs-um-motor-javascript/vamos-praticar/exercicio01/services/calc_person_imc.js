const person = require("../controller/inputs");
const calc = require("./imcCalc");

const personIMC = () => {
  person.inputs();

  const result = calc(person.data.peso, person.data.altura);
  return result;
};

module.exports = personIMC;
