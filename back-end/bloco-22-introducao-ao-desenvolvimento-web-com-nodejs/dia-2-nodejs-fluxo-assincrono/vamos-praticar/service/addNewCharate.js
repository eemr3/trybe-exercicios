const fs = require("fs").promises;
const readNewJSONSimpsions = require("./readNewJSON");

const newSimpsons = "../data/simpsonFamily.json";

const addNewCharater = async () => {
  const response = await readNewJSONSimpsions(newSimpsons);
  const data = [...response, { id: "5", name: "Nelson Muntz" }];
  const JSONData = JSON.stringify(data);
  console.log("Arquivo salvo com sucesso!");
  try {
    await fs.writeFile(newSimpsons, JSONData);
  } catch (error) {
    console.log(error.message);
  }
};

addNewCharater();
