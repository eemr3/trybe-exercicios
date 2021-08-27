/*Exercício 1
  - Utilize o for para imprimir os elementos da lista groceryList com o console.log() :
*/

let groceryList = ["Arroz", "Feijão", "Alface", "Melancia"];

for (let index = 0; index < groceryList.length; index += 1) {
  console.log(groceryList[index]);
}

console.log("\n==================================\n");
let cars = [
  "BMW",
  "Mercedez",
  "Volvo",
  "Volkswagen",
  "Ford",
  "Fiat",
  "Chevrolet",
];

for (let index = 0; index < cars.length; index += 1) {
  console.log(`Carro da marca ${cars[index]}`);
}
