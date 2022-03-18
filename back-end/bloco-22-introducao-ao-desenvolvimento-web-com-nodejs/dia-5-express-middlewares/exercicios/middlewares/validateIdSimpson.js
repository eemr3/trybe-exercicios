const { readFiles } = require("../services/file");

const validateIdSimpson = (req, res, next) => {
  const { id } = req.body;
  const simpsons = readFiles("./simpsons.json");
  const findSimpson = simpsons.some(
    (item) => parseInt(item.id) === parseInt(id)
  );

  if (findSimpson)
    return res
      .status(500)
      .json({ message: "Não é possível cadastrar esse simpson!" });
  next();
};

module.exports = validateIdSimpson;
