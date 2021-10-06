const food = ["arroz", "feijão", "farofa", "chocolate", "doce de leite"];
food.sort();
// console.log(food);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.sort();
// console.log(numbers); 

const points = [40, 100, 1, 5, 25, 10];
points.sort((elementOne, elementTwo) => elementOne - elementTwo);
// console.log(points); 
const inversePoints = [40, 100, 1, 5, 25, 10];
inversePoints.sort((elementOne, elementTwo) => elementTwo - elementOne);
// console.log(inversePoints);


/* Para fixar
1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente . */

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people.sort((elementOne, elementTwo) => elementOne.age - elementTwo.age);

console.table(people);
people.sort((elementOne, elementTwo) => elementTwo.age - elementOne.age);
console.table(people);