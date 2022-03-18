const { readFiles } = require("../services/file");

const getSimpsonById = (req, res, next) => {
  try {
    const { id } = req.params;
    const simpsons = readFiles("./simpsons.json");
    const findSimpson = simpsons.find(
      (item) => parseInt(item.id) === parseInt(id)
    );
    if (!findSimpson)
      return res.status(404).json({ message: "Simpson not found!" });
    res.status(200).json(findSimpson);
  } catch (error) {}
};

module.exports = getSimpsonById;
