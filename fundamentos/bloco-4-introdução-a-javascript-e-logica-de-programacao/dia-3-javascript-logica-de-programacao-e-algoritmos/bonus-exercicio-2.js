/* 
6- Faça um programa que diz se um número definido numa variável é primo ou não.
Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar. 
*/

const primeNumber = 31;

let checked = 0;

for (let numberIndex = 1; numberIndex <= primeNumber; numberIndex += 1) {
  if (primeNumber % numberIndex === 0) {
    checked += 1;
  }
}

if (checked === 2) {
  console.log(`O número ${primeNumber} é primo!`);
} else {
  console.log(`O número ${primeNumber} não é primo`);
}
