/*
Primeiro exercício 
Crie um objeto player contendo as variáveis listadas abaixo.
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 }; 
*/

let player = {
  name: "Maria",
  lastName: "Silva",
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  },
};

/* ===========================================================  */

/*
Segundo exercício
2 - Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade". 
*/

// console.log(
//   `A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade`
// );

/* ===========================================================  */

/*
Terceiro exercício 
3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo. 
*/

player["bestInTheWorld"] = [2006, 2007, 2008, 2009, 2010, 2018];

/* ===========================================================  */
/* 
Quarto exercíco
4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes". 
*/

let amount = 0;
let goldenMedals = 0;
let silverMedals = 0;

for (index = 0; index < player["bestInTheWorld"].length; index += 1) {
  amount += 1;
}

// console.log(
//   `A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por ${amount} vezes`
// );

/* =============================================================== */
/* 
Quinto exercício
5 - Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata". 
*/
console.log(
  `A jogadora ${player.name} ${player.lastName} possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata`
);
