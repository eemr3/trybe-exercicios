const allSimpsons = require("./readJSON");
const simpsons = "../data/simpsons.json";

const getSimpsonById = async (person) => {
  const response = await allSimpsons(simpsons);
  const findPerson = response.find((item) => Number(item.id) === person);

  if (!findPerson) {
    throw new Error("Personagem não existe!");
  }

  return findPerson;
};

module.exports = getSimpsonById;
