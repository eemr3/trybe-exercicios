const n = 7;
let positionMiddle = (n + 1) / 2;
let positionLeft = positionMiddle;
let positionRigth = positionMiddle;

for (let index = 1; index <= positionMiddle; index += 1) {
  let symbol = "";
  for (let secondIndex = 1; secondIndex <= n; secondIndex += 1) {
    if (
      secondIndex === positionLeft ||
      secondIndex === positionRigth ||
      index === positionMiddle
    ) {
      symbol += "*";
    } else {
      symbol += " ";
    }
  }
  positionLeft -= 1;
  positionRigth += 1;
  console.log(symbol);
}

/* 

5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
n = 7

   *
  * *
 *   *
*******

*/
