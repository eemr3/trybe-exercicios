const n = 5;
let positionSpace = (n + 1) / 2 - 1;
let positionSymbol = 1;

// Pode substituir os calculos pelos métdos Math.floor e Math.ceils nessa sequência

for (let index = 0; index < (n + 1) / 2; index += 1) {
  let symbol = "";
  for (let secondIndex = 0; secondIndex < positionSpace; secondIndex += 1) {
    symbol += " ";
  }
  for (let thirdIndex = 0; thirdIndex < positionSymbol; thirdIndex += 1) {
    symbol += "*";
  }

  console.log(symbol);
  positionSpace -= 1;
  positionSymbol += 2;
}
