/*
 Pegue cada um dos exercícios da primeira parte das nossas aulas de JavaScript e faça com que todos eles sejam funções de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções.  
 */
/* Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela altura */
let area = 0;
function trianglePerimeter(base, height) {
  area = base * height;

  return area;
}
// console.log(trianglePerimeter(5, 8));

/* Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo. */
function perimeter(num1, num2, num3, num4) {
  return num1 + num2 + num3 + num4;
}

// console.log(perimeter(5, 5, 8, 8));

/* Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:
Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
Se a nota for menor que 60, imprima "Você foi reprovada(o)" */

let resultado = "";
function notaCandidata(nota) {
  if (nota >= 80 && nota <= 100) {
    resultado = "Parabéns, você foi aprovada(o)!";
  } else if (nota < 80 && nota >= 60) {
    resultado = "Você está na nossa lista de espera";
  } else {
    resultado = "Você foi reprovada(o)";
  }
  return resultado;
}

// console.log(notaCandidata(7));

/* Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada' */

/* Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para: */
let resultadoDaOperacao = 0;

function operacaoAritimetica(firstNumber, secondNumber, operator) {
  if (operator === "+") {
    resultadoDaOperacao = firstNumber + secondNumber;
  } else if (operator === "-") {
    resultadoDaOperacao = firstNumber - secondNumber;
  } else if (operator === "*") {
    resultadoDaOperacao = firstNumber * secondNumber;
  } else if (operator === "/") {
    resultadoDaOperacao = firstNumber / secondNumber;
  } else {
    console.log("Não é uma operador aritimético!");
  }
  return resultadoDaOperacao;
}

//console.log(operacaoAritimetica(10, 5, "+"));

/* Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados. */

function compareTwoNumbers(firstNumber, secondNumber) {
  if (firstNumber > secondNumber) {
    console.log(
      `Entre o ${firstNumber} e ${secondNumber} o maior é ${firstNumber}`
    );
  } else {
    console.log(
      `Entre o ${secondNumber} e ${firstNumber} o maior é ${secondNumber}`
    );
  }
}

// compareTwoNumbers(7, 5);

/* Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados. */
function compareThreeNumbers(firstNumber, secondNumber, thirdNumber) {
  if (firstNumber > secondNumber && firstNumber > thirdNumber) {
    console.log(
      `Entre o ${firstNumber}, ${secondNumber} e ${thirdNumber} o maior é ${firstNumber}`
    );
  } else if (firstNumber < secondNumber && secondNumber > thirdNumber) {
    console.log(
      `Entre o ${firstNumber}, ${secondNumber} e ${thirdNumber} o maior é ${secondNumber}`
    );
  } else {
    console.log(
      `Entre o ${firstNumber}, ${secondNumber} e ${thirdNumber} o maior é ${thirdNumber}`
    );
  }
}

// compareThreeNumbers(522, 55, 117);

/* Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário. */

function positiveOrNegative(number) {
  if (number > 0) {
    console.log("Positive");
  } else if (number < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
}

// positiveOrNegative(-10);

/* Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. */

function triangleAngle(firstAngle, secondAngle, thirdAngle) {
  let angle = firstAngle + secondAngle + thirdAngle;
  if (angle === 180 && firstAngle > 0 && secondAngle > 0 && thirdAngle > 0) {
    console.log(`${true} - é um triângulo!`);
  } else if (firstAngle < 0 || secondAngle < 0 || thirdAngle < 0) {
    console.log("Erro: Um triângulo não pode possuir ângulo negativo!");
  } else {
    console.log(`${false} - não é um triângulo!`);
  }
}

// triangleAngle(65, 100, 15);

/* Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz. */
function chessPiece(piece) {
  if (piece.toLowerCase() === "rainha") {
    console.log(
      "Move quantas casas quiser na horizontal, vertical ou diagonal"
    );
  } else if (piece.toLowerCase() === "rei") {
    console.log(
      "Move-se para todas as direções pela vertical, horizontal ou diagonal, mas apenas uma casa por lance"
    );
  } else if (piece.toLowerCase() === "bispo") {
    console.log("Move na diagonal quantas casa quiser");
  } else if (piece.toLowerCase() === "cavalo") {
    console.log(
      "Ele pode andar duas casas na horizontal e uma na vertica, ou vice-versa, é uma peça que pode pular outra."
    );
  } else if (piece.toLowerCase() === "torre") {
    console.log(
      "A torre movimenta-se pela vertical ou horizontal quantas casas quiser."
    );
  } else if (piece.toLowerCase() === "peão") {
    console.log(
      "Só podem se mover uma casa por vez, exceto em seus primeiros movimentos, quando podem andar por duas casas"
    );
  } else {
    console.log("Não é uma peça de xadrez!");
  }
}

// chessPiece("Carroça");

/* Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F */
function notaAlunoConeito(nota) {
  if (nota >= 90 && nota <= 100) {
    console.log(`Sua nota foi A`);
  } else if (nota >= 80 && nota < 90) {
    console.log(`Sua nota foi B`);
  } else if (nota >= 70 && nota < 80) {
    console.log(`Sua nota foi C`);
  } else if (nota >= 60 && nota < 70) {
    console.log(`Sua nota foi D`);
  } else if (nota >= 50 && nota < 60) {
    console.log(`Sua nota foi E`);
  } else if (nota < 50 && nota >= 0) {
    console.log(`Sua nota foi F`);
  } else {
    console.log("Nota inválida!");
  }
}

//notaAlunoConeito(-1);

/* Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false  */

function numueroPar(numberOne, numberTwo, numberThree) {
  if (numberOne % 2 === 0 || numberTwo % 2 === 0 || numberThree % 2 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// numueroPar(8, 3, 5);

/* Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false . */

function numeroImpar(numberOne, numberTwo, numberThree) {
  if (numberOne % 2 !== 0 || numberTwo % 2 !== 0 || numberThree % 2 !== 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// numeroImpar(2, 5, 50);

/* Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos. */

function lucroVenda(custoProduto, valorVenda, quatidadeVendida) {
  const imposto = (custoProduto * 20) / 100;
  const totalCustoProduto = custoProduto + imposto;
  const totalLucroEmpresa = (valorVenda - totalCustoProduto) * quatidadeVendida;

  return totalLucroEmpresa;
}

// console.log(lucroVenda(50, 85, 1000));

/* Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido. */

function salarioBase(salarioBruto) {
  let aliquotaINSS = aliquotaImpostoINSS(salarioBruto);
  let valorSalarioBase = 0;

  if (aliquotaINSS === 570.88) {
    valorSalarioBase = salarioBruto - 570.88;
  } else {
    valorSalarioBase = salarioBruto - (salarioBruto * aliquotaINSS) / 100;
  }

  return valorSalarioBase;
}

function salarioDeduzidoIR(valorSalarioBase) {
  let aliquotaEParcelas = aliquotaImpostoDeRenda(valorSalarioBase);

  let valorSalarioDeduzidoIR =
    (salarioBase(valorSalarioBase) * aliquotaEParcelas.aliquotaIR) / 100 -
    aliquotaEParcelas.parcelas;
  return valorSalarioDeduzidoIR.toFixed(2);
}

function aliquotaImpostoINSS(salarioBruto) {
  let aliquotaINSS = 0;
  if (salarioBruto <= 1556.94) {
    aliquotaINSS = 8;
  } else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    aliquotaINSS = 9;
  } else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    aliquotaINSS = 11;
  } else {
    aliquotaINSS = 570.88;
  }
  return aliquotaINSS;
}

function aliquotaImpostoDeRenda(salarioBaseDeduzidoINSS) {
  let aliquotaIR = 0;
  let parcelas = 0;

  let valorSalarioDeduzidoINSS = salarioBase(salarioBaseDeduzidoINSS);

  if (valorSalarioDeduzidoINSS <= 1903.98) {
    aliquotaIR = 0;
  } else if (
    valorSalarioDeduzidoINSS >= 1903.99 &&
    valorSalarioDeduzidoINSS <= 2826.65
  ) {
    aliquotaIR = 7.5;
    parcelas = 142.8;
  } else if (
    salarioBaseDeduzidoINSS >= 2826.66 &&
    salarioBaseDeduzidoINSS <= 3751.05
  ) {
    aliquotaIR = 15;
    parcelas = 354.8;
  } else if (
    salarioBaseDeduzidoINSS >= 3751.06 &&
    salarioBaseDeduzidoINSS <= 4664.68
  ) {
    aliquotaIR = 22.5;
    parcelas = 636.13;
  } else {
    aliquotaIR = 27.5;
    parcelas = 869.36;
  }

  return { aliquotaIR, parcelas };
}

function salarioLiquido(salarioBruto) {
  let salarioLiquidoReceber =
    salarioBase(salarioBruto) - salarioDeduzidoIR(salarioBruto);

  console.log(`Salário liquido -> ${salarioLiquidoReceber}`);
}

salarioLiquido(3000);
