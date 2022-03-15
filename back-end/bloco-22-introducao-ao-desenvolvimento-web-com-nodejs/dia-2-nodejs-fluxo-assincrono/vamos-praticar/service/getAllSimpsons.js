const allSimpsons = require("./readJSON");

const simpsons = "../data/simpsons.json";

const getAllSimpsons = () => {
  allSimpsons(simpsons).then((data) =>
    data.map((item) => console.log(`${item.id} - ${item.name}`))
  );
};

module.exports = getAllSimpsons;
