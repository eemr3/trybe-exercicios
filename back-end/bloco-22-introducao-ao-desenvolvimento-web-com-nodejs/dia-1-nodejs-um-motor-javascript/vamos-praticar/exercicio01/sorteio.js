const readline = require("readline-sync");
const sorted = require("./services/confirme_guess");

function sortedNumber() {
  let repeatSorted = "s";
  while (repeatSorted === "s") {
    sorted();
    repeatSorted = readline.question("Deseja tentar novamente (s/n)? ");
  }
}

module.exports = sortedNumber;
