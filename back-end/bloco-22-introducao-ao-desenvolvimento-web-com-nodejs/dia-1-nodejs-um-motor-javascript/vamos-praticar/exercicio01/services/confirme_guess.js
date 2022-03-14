const { data, inputNumber } = require("../controller/inputNumber");
const randomNumber = require("./generateRandomNumber");

const confirmeGuess = () => {
  inputNumber();
  let result = "";
  if (randomNumber() === data.guess) result = "Parabéns, número correto!";
  else result = `Opa, não foi dessa vez. O número era ${randomNumber()}.`;
  return console.log(result);
};

module.exports = confirmeGuess;
