const fs = require("fs").promises;
const simpsonFamily = require("./simpsonFamily");

const createNewJSON = async () => {
  const data = await simpsonFamily();
  try {
    await fs.writeFile("../data/simpsonFamily.json", JSON.stringify(data), {
      flag: "wx",
    });
    console.log("Arquivo criado com sucesso!");
  } catch (error) {
    console.log(error.message);
  }
};

createNewJSON();
module.exports = createNewJSON;
