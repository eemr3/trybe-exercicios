const n = 5;

for (let index = 1; index <= n; index += 1) {
  let asterisk = "";
  for (let secondIndex = 1; secondIndex <= index; secondIndex += 1) {
    asterisk += "*";
  }
  console.log(asterisk);
}

// let n = 5;

// let resultado = "";

// for (let index = 0; index < n; index += 1) {
//   resultado += "*";
//   console.log(resultado);
// }
