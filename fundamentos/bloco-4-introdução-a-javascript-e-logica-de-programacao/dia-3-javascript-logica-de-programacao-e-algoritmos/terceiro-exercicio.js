const n = 5;
let positionSymbol = n;

for (let index = 0; index < n; index += 1) {
  let symbol = "";
  for (let sencondIndex = 0; sencondIndex <= n; sencondIndex += 1) {
    if (sencondIndex < positionSymbol) {
      symbol += " ";
    } else {
      symbol += "*";
    }
  }
  console.log(symbol);
  positionSymbol -= 1;
}
