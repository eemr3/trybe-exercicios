/* 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
Dica: use parâmetro rest . */

const sum = (...valeus) => {
  return valeus.reduce((accumulator, currentValue) => accumulator + currentValue);
};

module.exports = sum;