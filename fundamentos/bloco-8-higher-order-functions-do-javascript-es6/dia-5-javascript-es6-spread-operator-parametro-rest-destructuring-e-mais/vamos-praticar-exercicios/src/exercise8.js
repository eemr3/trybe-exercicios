/* 8 - Escreva uma função greet que, dado o nome de uma pessoa, 
retorna uma mensagem de cumprimento:
Dica: use default params . */

const greet = (name, greet = "Hi") => `${greet} ${name}`; 

module.exports = greet;