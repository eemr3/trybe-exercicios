// Faça uma lista com as suas frutas favoritas
const specialFruit = ["maçã", "laranha", "morango"];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ["creme de leite", "cereja", "sorvete"];

const fruitSalad = (fruit, additional) => {
  return [...specialFruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));
