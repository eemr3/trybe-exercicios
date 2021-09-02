const arrayNames = [
  "José Silva",
  "Lucas",
  "Nádia",
  "Fernanda",
  "Cairo",
  "Joana",
];

function greaterAmountOfCharacters(arr) {
  let amountOfChar = 0;

  let bigName = arr[0];

  for (let index = 0; index < arr.length; index += 1) {
    if (amountOfChar < arr[index].length) {
      bigName = arr[index];
      amountOfChar = arr[index].length;
    }
  }
  return bigName;
}

console.log(greaterAmountOfCharacters(arrayNames));
