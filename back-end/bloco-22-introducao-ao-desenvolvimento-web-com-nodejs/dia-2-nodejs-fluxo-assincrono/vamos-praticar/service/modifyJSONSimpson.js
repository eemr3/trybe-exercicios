const allSimpsons = require("./readJSON");
const simpsons = "../data/simpsons.json";

const removeCharacter = async () => {
  const response = await allSimpsons(simpsons);
  const data = response.filter(
    (item) => Number(item.id) !== 6 && Number(item.id) !== 10
  );
  const JSONData = JSON.stringify(data);
  return JSONData;
};

module.exports = removeCharacter;
