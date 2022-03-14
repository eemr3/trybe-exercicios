const average = require("./average_speed");
const { data, inputSpeed } = require("../controller/input_speed");

const calcAverage = () => {
  inputSpeed();

  const result = average(data.distance, data.time);
  return console.log(result);
};

module.exports = calcAverage;
