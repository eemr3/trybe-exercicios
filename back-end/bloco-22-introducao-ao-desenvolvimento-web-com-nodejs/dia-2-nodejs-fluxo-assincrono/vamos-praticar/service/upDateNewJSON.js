const fs = require("fs").promises;
const readNewJSON = require("./readNewJSON");

const newSimpsons = "../data/simpsonFamily.json";

const upDateNewJSON = async () => {
  const response = await readNewJSON(newSimpsons);
  const index = response.map((item) => item.id).indexOf("5");
  response[index] = { id: "5", name: "Maggie Simpson" };
  try {
    await fs.writeFile(newSimpsons, JSON.stringify(response));
    console.log("Arquivo alterado com sucesso!");
  } catch (error) {
    console.log(error.message);
  }
};

upDateNewJSON();
