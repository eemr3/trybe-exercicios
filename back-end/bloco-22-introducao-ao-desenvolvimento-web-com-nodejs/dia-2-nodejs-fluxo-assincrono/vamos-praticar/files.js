const fs = require("fs").promises;

const createFiles = async () => {
  try {
    Promise.all([
      fs.writeFile("file01.txt", "Arquivo de número 1"),
      fs.writeFile("file02.txt", "Arquivo de número 2"),
      fs.writeFile("file03.txt", "Arquivo de número 3"),
      fs.writeFile("file04.txt", "Arquivo de número 4"),
    ]);
    console.log("Arquivos criados com sucesso!");
  } catch (error) {
    console.log(error.message);
  }
};

createFiles();
