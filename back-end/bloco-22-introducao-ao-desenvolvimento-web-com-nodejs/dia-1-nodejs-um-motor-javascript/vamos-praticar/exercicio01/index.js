const readline = require("readline-sync");
const menu = require("./views/meuOptions");
const velocidade = require("./velocidade");
const imc = require("./imc");
const sorteio = require("./sorteio");

const menuOption = () => {
  menu();
  const option = readline.questionInt("Escolha uma opção: ");
  switch (option) {
    case 1:
      imc();
      break;
    case 2:
      velocidade();
      break;
    case 3:
      sorteio();
      break;
    default:
      break;
  }
};

menuOption();
