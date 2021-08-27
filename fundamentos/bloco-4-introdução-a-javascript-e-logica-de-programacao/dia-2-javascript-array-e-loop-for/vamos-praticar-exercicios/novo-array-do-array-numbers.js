/* Exercício Bonus */
/* Novo array com valores multiplicados */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let newArrayNumbers = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index === numbers.length - 1) {
    newArrayNumbers.push(numbers[index] * 2);
  } else {
    newArrayNumbers.push(numbers[index] * numbers[index + 1]);
  }
}

console.log(newArrayNumbers);
