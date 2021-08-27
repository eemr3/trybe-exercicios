const n = 5;

for (let index = 1; index <= n; index += 1) {
  let asterisk = "*";
  for (let secondIndex = 5; secondIndex > index; secondIndex -= 1) {
    space = " ";
    asterisk = space + asterisk;
  }
  console.log(asterisk);
}
