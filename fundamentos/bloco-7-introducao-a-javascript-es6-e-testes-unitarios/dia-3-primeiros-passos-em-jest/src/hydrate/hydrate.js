function hydrate(str) {
  let numStr = str.replace(/\D/g, "");
  let sum = 0;
  for (const key in numStr) {
    sum += Number(numStr[key]);
  }
  return sum === 1 ? "1 copo de água" : `${sum} copos de água`;
}

module.exports = hydrate;
