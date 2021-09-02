let estadoDoCarro = "Desligado";
let aceleracao = 0;
let direcao = 0;

function ligarDesligar() {
  if (estadoDoCarro === "Desligado") {
    estadoDoCarro = "Ligado";
  } else {
    estadoDoCarro = "Desligado";
  }
  return estadoDoCarro;
}

function acelerar(incremento) {
  aceleracao += incremento;
  return `Acelerando a ${aceleracao}m/s²`;
}

function frear(decremento) {
  aceleracao -= decremento;
  return `Desacelerando para ${aceleracao}m/s²`;
}

function direcionar(anguloRotacao) {
  direcao = anguloRotacao;
  return `${direcao}°`;
}

console.log(ligarDesligar());

console.log(acelerar(20));

console.log(frear(5));
console.log(direcionar(-45));
console.log(direcionar(0));
console.log(frear(15));
console.log(ligarDesligar());
