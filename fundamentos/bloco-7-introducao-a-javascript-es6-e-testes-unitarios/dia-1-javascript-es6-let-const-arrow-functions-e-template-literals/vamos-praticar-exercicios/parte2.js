/* Crie uma função que receba um número e retorne seu fatorial.
Na matemática, o fatorial de um número não negativo N, com a notação N!, é o produto de todos os inteiros menores ou iguais a N.Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
Bônus(opcional): tente fazer o mesmo exercício de forma recursiva.Spoiler: É possível resolver com uma linha usando ternary operator. */
// Fatorial de 5 = 5 * (5 - 1) * (5 - 2) * (5 - 3) * (5 - 4) = 120 -> Onde 5 é o N e 1 é o indice

const fatorialNumber = (n) => {
  let resultFatorial = n;
  for (let index = 1; index < n; index += 1) {
    resultFatorial *= index;
  }
  return `O ${n}! = ${resultFatorial}`;
};

console.log(fatorialNumber(5));

// Fatorial usando recursividade
const recursiveFatorial = (n) => {
  if (n > 1) {
    return n * recursiveFatorial(n - 1);
  }
  return n;
};

console.log(recursiveFatorial(6));

// Fatoria usando recursividade e operador ternario
const recursivFatorial = (n) => (n > 1 ? n * recursivFatorial(n - 1) : n);
console.log(recursivFatorial(5));

/*
Crie uma função que receba uma frase e retorne qual a maior palavra.
*/

const longestWord = (phrase) => {
  const rsultPhrase = phrase.split(" ");
  let bigPhrase = "";
  for (let index = 0; index < rsultPhrase.length; index += 1) {
    for (let index2 = 0; index2 < rsultPhrase.length; index2 += 1) {
      if (rsultPhrase[index].length > rsultPhrase[index2].length) {
        bigPhrase = rsultPhrase[index];
      }
    }
  }
  return bigPhrase;
};
console.log(
  longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")
);

/* Função 1 : Escreva uma função que vai receber uma string como parâmetro.Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro.Sua função deve retornar essa nova string.
 */

const searchChar = (str) => {
  let phrase = "Tryber x aqui!";
  let phraseSplit = phrase.split(" ");

  for (let index = 0; index < phrase.length; index += 1) {
    if (phraseSplit[index] === "x") {
      phraseSplit[index] = str;
    }
  }
  return phraseSplit.join(" ");
};

console.log(searchChar("Bebeto"));

// Usando o splite()
const searchChar2 = (str) => {
  let phase = "Tryber x aqui!";
  return phase.replace("x", str);
};

console.log(searchChar2("Bernardo"));


const skills = ['HTML', 'CSS', 'JS', 'Git/Github', 'Linux'];

const concatStringArray = (param) => {
  const skillSoted = skills.sort()
  let resultPrint = `${param} 
  
  Minhas cinco principais habilidades são:`
  skillSoted.forEach((skill, index) =>
    resultPrint = `${resultPrint}
    - ${skill}`)

  resultPrint = `${resultPrint}
  #goTrybe
  `
  return resultPrint
}
const result = concatStringArray(searchChar2('Emerson'))
console.log(result)



