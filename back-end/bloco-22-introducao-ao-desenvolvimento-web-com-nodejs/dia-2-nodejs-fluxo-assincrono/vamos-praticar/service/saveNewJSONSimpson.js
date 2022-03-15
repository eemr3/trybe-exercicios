const fs = require("fs").promises;
const dataModifySimpson = require("./modifyJSONSimpson");

const simpsons = "../data/simpsons.json";

const saveNewDataInJSON = async () => {
  const response = await dataModifySimpson();
  fs.writeFile(simpsons, response);
};

saveNewDataInJSON();
