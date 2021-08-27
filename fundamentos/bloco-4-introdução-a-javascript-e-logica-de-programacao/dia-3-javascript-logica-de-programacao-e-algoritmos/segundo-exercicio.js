const n = 5;

for (let index = 1; index <= n; index += 1) {
  let asterisk = "*";
  for (let secondIndex = 1; secondIndex <= index - 1; secondIndex += 1) {
    asterisk += "*";
  }
  console.log(asterisk);
}
