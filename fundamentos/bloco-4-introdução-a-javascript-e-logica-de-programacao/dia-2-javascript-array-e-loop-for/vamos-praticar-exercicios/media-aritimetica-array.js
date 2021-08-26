/* Exercícoi 03 */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let arithmeticAverage = 0;
for (let index = 0; index < numbers.length; index += 1) {
  arithmeticAverage = arithmeticAverage + numbers[index];
}

console.log(arithmeticAverage / numbers.length.toFixed(2));
