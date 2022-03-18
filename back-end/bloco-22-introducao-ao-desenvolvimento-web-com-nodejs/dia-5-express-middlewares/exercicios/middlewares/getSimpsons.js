const fs = require("fs");

const getSimpsons = (req, res, next) => {
  try {
    const simpsons = fs.readFileSync("./simpsons.json", "utf8");
    res.status(200).json(JSON.parse(simpsons));
  } catch (error) {
    console.log(error);
  }
};

module.exports = getSimpsons;
