/* Exercícoi 02 */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let result = 0;
for (let index = 0; index < numbers.length; index += 1) {
  result += numbers[index];
}
console.log("A soma de todos os valore do array é -> " + result);