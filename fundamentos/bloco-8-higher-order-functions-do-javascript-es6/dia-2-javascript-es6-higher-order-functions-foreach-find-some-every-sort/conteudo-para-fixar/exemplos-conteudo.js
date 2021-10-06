/* Usando o For normal */
/* const students = [
  { name: "Maria", grade: 70, approved: "" },
  { name: "José", grade: 56, approved: "" },
  { name: "Roberto", grade: 90, approved: "" },
  { name: "Ana", grade: 81, approved: "" },
];

function verifyGrades() {
  for (let i = 0; i < students.length; i += 1) {
    const student = students[i];
    if (student.grade >= 60) {
      student.approved = "Aprovado";
    } else {
      student.approved = "Recuperação";
    }
  }
}

verifyGrades();

console.log(students); */
// [
//   { name: 'Maria', grade: 70, approved: 'Aprovado' },
//   { name: 'José', grade: 56, approved: 'Recuperação' },
//   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
//   { name: 'Ana', grade: 81, approved: 'Aprovado' }
// ]


/* Usando forEach , é assim que você faria a mesma coisa: */
const students = [
  { name: 'Maria', grade: 70, approved: '' },
  { name: 'José', grade: 56, approved: '' },
  { name: 'Roberto', grade: 90, approved: '' },
  { name: 'Ana', grade: 81, approved: '' },
];

function verifyGrades() {
  students.forEach((student, index) => {
    if (student.grade >= 60) {
      students[index].approved = 'Aprovado';
    } else {
      students[index].approved = 'Recuperação';
    }
  });
}

verifyGrades();

// console.log(students);

/* Usando o For convencional */
// const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
// let firstMultipleOf5;
// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] % 5 === 0) {
//     firstMultipleOf5 = numbers[index];
//     break;
//   }
// }

// console.log(firstMultipleOf5);

// const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
// const firstMultipleOf5 = numbers.find((number) => number % 5 === 0);

// console.log(firstMultipleOf5);


/* As Higher Order Functions que veremos hoje são parecidas entre si: elas mudam em alguns pontos específicos, mas todas possuem a mesma estrutura. Para demonstrar, olhe o exemplo de uma HOF que imprime na tela cada valor do array: */

// const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
// arrayOfValues.forEach((element) => {
//   console.log('Cada elemento do array:', element);
// });

// const arrayOfValues = ["josé", 50, 0.25, { comida: "Chocolate" }];
// arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
//   console.log("Cada elemento do array:", element);
//   console.log("Index, posição do elemento:", indexOfTheArray);
//   console.log("Array percorrido:", theEntireArray);
// });

/* Agora vamos usar o forEach , para realizar a tabuada do 2. Veja o exemplo abaixo: */
/* No exemplo a baixo, foi executado para cada elemento do array a função multipliesFor2 , que imprime o parâmetro element * 2 no console. */
// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const multipliesFor2 = (element) => {
//   console.log(`${element} * 2: ${element * 2}`);
// };

// numbers.forEach(multipliesFor2);

/* Agora estamos tratando de uma HOF , sendo assim é possível se utilizar também dos demais parâmetros para se resolver um problema. Como se pode fazer isso? Veja este exemplo abaixo com o uso de index no forEach :
 */
const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names); 