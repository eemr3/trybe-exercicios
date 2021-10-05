/* O exemplo abaixo usa o some para verificar se possui algum nome que começa com a letra desejada: */

const listNames = ["Maria", "Manuela", "Jorge", "Ricardo", "Wilson"];

const verifyFirstLetter = (letter, names) =>
  names.some((name) => name[0] === letter);

// console.log(verifyFirstLetter('J', listNames));
// console.log(verifyFirstLetter('x', listNames));

/* O exemplo abaixo usará o every para verificar se o estudante passou em todas as matérias: */

const grades = {
  portugues: "Aprovado",
  matematica: "Aprovado",
  ingles: "Aprovado",
};

const verifyGrades = (studentGrades) =>
  Object.values(studentGrades).every((grade) => grade === "Aprovado");

// console.log(verifyGrades(grades));

/* Para fixar
creva uma função que dado um array de nomes e um nome retorne true 
se ele estiver contido e caso contrário, retorne false , use some ; */

const names = ["Mateus", "José", "Ana", "Cláudia", "Bruna"];

const hasName = (arr, name) => {
  const result = arr.some((value) => value === name);
  return result;
};

// console.log(hasName(names, "Ana"));
// console.log(hasName(names, "Mateus"));
// console.log(hasName(names, "Emerson"));

/* 2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true 
se todas tiverem a idade maior ou igual a mínima e caso contrário false , use every ; */

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  const result = arr.every((element) =>  element.age >= minimumAge);
  return result;
}

console.log(verifyAges(people, 18));