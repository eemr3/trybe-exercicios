/* A função soma todos os valores de um array:
   Apenas com o for :
 */

// const numbers = [32, 15, 3, 2, -5, 56, 10];
// let sumNumbers = 0;
// // A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!

// for (let index = 0; index < numbers.length; index += 1) {
//   sumNumbers += numbers[index];
// }
// console.log(sumNumbers);

/* Com .reduce : */
// const numbers = [32, 15, 3, 2, -5, 56, 10];

// O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
// const sumNumbers = numbers.reduce((result, number) => result + number);
// console.log(sumNumbers);

// Ou seja:

// const getSum = (result, number) => result + number;
// const sumNumbers = numbers.reduce(getSum);
// console.log(sumNumbers);

const collection = [1, 2, 3, 4, 5];

// const getSum = (accumulator, number) => {
//   console.log(accumulator); // 1 3 6 10
//   return accumulator + number;
// };

// const sumNumbers = collection.reduce(getSum);
// console.log(sumNumbers); // 15

/* O reduce possui uma outra diferença: você pode passar um segundo parâmetro 
para o reduce, logo após a função . Veja a seguir, será usado o
 último exemplo dado da soma dos números: */

//  const numbers = [32, 15, 3, 2, -5, 56, 10];

// const getSum = (result, number) => {
//   console.log(result); // 32 47 50 52 47 103
//   return result + number;
// };

// const sumNumbers = numbers.reduce(getSum);
// console.log(sumNumbers); // 113

/* Com a alteração: */
// const numbers = [32, 15, 3, 2, -5, 56, 10];

// const getSum = (result, number) => {
//   console.log(result); // 0 32 47 50 52 47 103
//   return result + number;
//   };
// const sumNumbers = numbers.reduce(getSum, 0); // Parâmetro adicionado ao reduce: o "0"
// console.log(sumNumbers); // 113

/* Pode ver que mudou em nada o resultado da função. 
Mas veja que o primeiro valor do result não foi 32 , mas sim 0 .
Agora mude o 0 para 10 ou qualquer outro valor. */

// const numbers = [32, 15, 3, 2, -5, 56, 10];

// const getSum = (result, number) => {
//   console.log(result); // 10 42 57 60 62 57 113
//   return result + number;
//   };
// const sumNumbers = numbers.reduce(getSum, 10);
// console.log(sumNumbers); // 123

/* Agora o resultado mudou para 123 , e o primeiro número impresso foi o 10 . 
Entendeu? Ao adicionar esse segundo parâmetro você está colocando um valor 
inicial na variável result , ou seja, no acumulador . Ele é o valor inicial do reduce . 
Caso nenhum parâmetro seja passado, o seu valor inicial será a primeira posição do array.
Hora de olhar outro exemplo para fixar e mostrar outras formas de se usar o reduce . 
Neste exemplo, serão comparados valores para buscar o maior valor em um array. 
Tente criar essa função apenas com for e depois tente com reduce . 
Caso não consiga, olhe a solução abaixo: */

// const numbers = [50, 85, -30, 3, 15];
// let acumu = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//   if(numbers[index] > acumu){
//     acumu = numbers[index];

//   }

// }
// console.log(acumu);

// const getBigger = (bigger, number) => {
//   return bigger > number ? bigger : number;
// };

// const bigger = numbers.reduce(getBigger, 0);
// console.log(bigger);
/* 

Para fixar ainda mais conceito de reduce , faça uma função que some todos os números pares do array:
Solução é está a seguir, mas tente realizar a função sem vê-la. 
Tente criar uma usando reduce e filter , e outra apenas usando reduce .
Solução usando filter e redu */

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const resultFilterAndReduce = numbers
  .filter((number) => number % 2 === 0)
  .reduce((acumulador, resultado) => resultado + acumulador);
// console.log('Usando filter e reduce ->', resultFilterAndReduce);

/* Solução usando apenas reduce : */
//Abaixo solução course
// const sumPair = (currentValue, number) =>
//   number % 2 === 0 ? currentValue + number : currentValue;

// const resultReduce = numbers.reduce(sumPair, 0);

const resultReduce = numbers.reduce(
  (acc, num) => (num % 2 === 0 ? acc + num : acc),
  0
);
// console.log('Usando reduce ->', resultReduce);

/* Agora crie uma função usando os dados dos estudantes que usamos no conteúdo
 do dia anterior, para mostrar na tela um relatório que diz em qual matéria o 
 estudante foi melhor. Você usará tanto o map quanto, dentro dele, o reduce ! */

const estudantes = [
  {
    nome: "Jorge",
    sobrenome: "Silva",
    idade: 14,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: 67 },
      { name: "Português", nota: 79 },
      { name: "Química", nota: 70 },
      { name: "Biologia", nota: 65 },
    ],
  },
  {
    nome: "Mario",
    sobrenome: "Ferreira",
    idade: 15,
    turno: "Tarde",
    materias: [
      { name: "Matemática", nota: 59 },
      { name: "Português", nota: 80 },
      { name: "Química", nota: 78 },
      { name: "Biologia", nota: 92 },
    ],
  },
  {
    nome: "Jorge",
    sobrenome: "Santos",
    idade: 15,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: 76 },
      { name: "Português", nota: 90 },
      { name: "Química", nota: 70 },
      { name: "Biologia", nota: 80 },
    ],
  },
  {
    nome: "Maria",
    sobrenome: "Silveira",
    idade: 14,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: 91 },
      { name: "Português", nota: 85 },
      { name: "Química", nota: 92 },
      { name: "Biologia", nota: 90 },
    ],
  },
  {
    nome: "Natalia",
    sobrenome: "Castro",
    idade: 14,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: 70 },
      { name: "Português", nota: 70 },
      { name: "Química", nota: 60 },
      { name: "Biologia", nota: 50 },
    ],
  },
  {
    nome: "Wilson",
    sobrenome: "Martins",
    idade: 14,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: 80 },
      { name: "Português", nota: 82 },
      { name: "Química", nota: 79 },
      { name: "Biologia", nota: 75 },
    ],
  },
];

const expectedResult = [
  { name: "Jorge", materia: "Português" },
  { name: "Mario", materia: "Biologia" },
  { name: "Jorge", materia: "Português" },
  { name: "Maria", materia: "Química" },
  { name: "Natalia", materia: "Português" },
  { name: "Wilson", materia: "Português" },
];

const reportOfHighestGrades = (array) =>
  array.map((greade) => ({
    nome: greade.nome,
    materia: greade.materias.reduce((acc, greade) =>
      acc.nota > greade.nota ? acc : greade
    ).name,
  }));

console.log(reportOfHighestGrades(estudantes));




// function longestNamedBook() {
//   return books.reduce((accumulator, currentValue) => {
//     //console.log(currentValue.name.length);
//     if (currentValue.name.length > accumulator.name.length) {
//       return currentValue;
//     }
//     return accumulator;
//   });
// }
// console.log(longestNamedBook());