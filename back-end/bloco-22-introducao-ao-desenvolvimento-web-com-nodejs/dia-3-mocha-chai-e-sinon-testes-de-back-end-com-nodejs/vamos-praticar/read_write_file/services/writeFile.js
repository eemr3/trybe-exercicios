const fs = require("fs").promises;

const writeFile = async (arquivo, texto) => {
  try {
    await fs.writeFile(`../files/${arquivo}.txt`, texto, { flag: "wx" });
    return "ok";
  } catch (error) {
    console.log(error.mesage);
  }
};

module.exports = writeFile;
