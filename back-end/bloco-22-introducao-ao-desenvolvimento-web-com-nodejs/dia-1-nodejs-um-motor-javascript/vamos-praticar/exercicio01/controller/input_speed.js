const readline = require("readline-sync");

const data = {
  distance: 0,
  time: 0,
};

const inputSpeed = () => {
  data.distance = readline.questionInt(
    "Qual a distância percorrida em metros? "
  );
  data.time = readline.questionInt("Qaul o tempo gasto em segundos? ");
};

module.exports = { data, inputSpeed };
