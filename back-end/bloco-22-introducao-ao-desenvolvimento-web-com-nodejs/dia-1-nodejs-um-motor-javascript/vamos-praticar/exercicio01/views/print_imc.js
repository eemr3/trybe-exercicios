const calcPersonImc = require("../services/calc_person_imc");

function printResultIMC() {
  const imc = calcPersonImc();
  let result = "";
  if (imc < 18.5) result = `Seu IMC é ${imc} Abaixo do peso (magreza)`;
  else if (imc < 24.9) result = ` Seu IMC é ${imc} Peso normal`;
  else if (imc < 29.9) result = `Seum IMC é ${imc} Acima do peso (sobrepeso)`;
  else if (imc < 34.9) result = `Seu IMC é ${imc} "Obesidade grau I`;
  else if (imc < 39.9) result = `Seu IMC é ${imc} Obesidade grau II`;
  else result = `Seu IMC é ${imc} Obesidade grau III e IV`;

  return console.log(result);
}

module.exports = printResultIMC;
