/* Exercícoi 08 */
let numbersArray = [];
for (let index = 1; index <= 25; index += 1) {
  numbersArray.push(index);
}
console.log(numbersArray);

/* Exercícoi 09 */
//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
for (let index = 0; index < numbersArray.length; index += 1) {
  let result = numbersArray[index] / 2;
  console.log(result);
}
