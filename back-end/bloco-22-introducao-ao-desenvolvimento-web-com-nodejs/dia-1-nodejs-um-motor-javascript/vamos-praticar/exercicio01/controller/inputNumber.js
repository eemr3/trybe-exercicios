const readline = require("readline-sync");

const data = {
  guess: "",
};

const inputNumber = () => {
  data.guess = readline.questionInt(
    "Adivinhe qua será o número! Deite o seu papite? "
  );
};

module.exports = { data, inputNumber };
