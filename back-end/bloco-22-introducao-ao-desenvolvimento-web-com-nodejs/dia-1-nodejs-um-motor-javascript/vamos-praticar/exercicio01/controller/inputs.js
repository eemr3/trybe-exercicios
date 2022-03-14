const readline = require("readline-sync");

const data = {
  peso: 0,
  altura: 0,
};

const inputs = () => {
  data.peso = readline.questionFloat("Qual o seu peso em Kg, ex: 65: ");
  data.altura = readline.questionFloat(
    "Qual a sua altura em medtro, ex: 1.67: "
  );
};

module.exports = {
  data,
  inputs,
};
