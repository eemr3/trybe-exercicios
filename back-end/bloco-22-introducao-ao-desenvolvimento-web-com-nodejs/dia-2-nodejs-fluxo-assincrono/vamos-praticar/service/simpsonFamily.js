const readJSON = require("./readJSON");

const simpsons = "../data/simpsons.json";

const simpsonFamily = async () => {
  const data = [];
  const response = await readJSON(simpsons);
  for (let index = 0; index < 4; index += 1) {
    data.push(response[index]);
  }
  return data;
};

module.exports = simpsonFamily;
