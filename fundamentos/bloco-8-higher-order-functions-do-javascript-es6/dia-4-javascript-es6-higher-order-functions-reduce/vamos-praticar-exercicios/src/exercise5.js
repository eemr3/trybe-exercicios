/* 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula. */
const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

function containsA() {
  return names.reduce((acc, name) => {
    const resutl = `${acc} ${name}`
    return resutl.toUpperCase().match(/A/g);
}).length
}

module.exports = containsA;

  