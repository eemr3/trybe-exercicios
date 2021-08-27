const n = 5;

for (let index = 1; index <= n; index += 1) {
  let first = "*";
  for (let secondIndex = 1; secondIndex <= n - 1; secondIndex += 1) {
    first += "*";
  }
  console.log(first);
}
