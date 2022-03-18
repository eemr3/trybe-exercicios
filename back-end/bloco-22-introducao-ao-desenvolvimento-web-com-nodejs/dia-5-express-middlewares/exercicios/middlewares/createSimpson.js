const { readFiles, createFiles } = require("../services/file");

const createSimpson = (req, res, next) => {
  const { id, name } = req.body;
  const newSimpson = readFiles("./simpsons.json");
  newSimpson.push({ id, name });
  createFiles("./simpsons.json", newSimpson);
  return res.status(201).json({ message: "Simpson criado com sucesso!" });
};

module.exports = createSimpson;
