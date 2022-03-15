const fs = require("fs");

function leArquivo(arquivo) {
  try {
    const conteudoDoArquivo = fs.readFileSync(arquivo, "utf8");

    return conteudoDoArquivo;
  } catch (error) {
    return null;
  }
}
module.exports = leArquivo;
