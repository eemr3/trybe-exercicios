/* 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem. */

const RIGHT_ANSWERS = ["A", "C", "B", "D", "A", "A", "D", "A", "D", "C"];
const STUDENT_ANSWERS = ["A", "N.A", "B", "D", "A", "C", "N.A", "A", "D", "B"];

const checkAnswers = (arrayTemplate, arrayToCheck) => {
  let count = 0;
  for (let index = 0; index < arrayTemplate.length; index += 1) {
    if(arrayTemplate[index] === arrayToCheck[index]){
      count += 1;
    } else if (arrayToCheck[index] === "N.A") {
      count += 0;
    } else {
      count -= 0.5;
    }
  }
  return `Total de respostas certas => ${count}`;
} 

const checkRightAnswers = (arrayTemplate, arrayToCheck, func) => {
  return func(arrayTemplate, arrayToCheck);
}

const result = checkRightAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers);
console.log(result)
