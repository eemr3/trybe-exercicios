const { expect } = require("chai");
const fs = require("fs").promises;
const sinon = require("sinon");

const writeFile = require("../services/writeFile");

describe("funcao para escrever em um arquivo", () => {
  describe("não existindo o arquivo", () => {
    before(() => {
      sinon
        .stub(fs, "writeFile")
        .resolves("../files/arquivo.txt", "Olá mundo!");
    });

    after(() => {
      fs.writeFile.restore();
    });

    it("escrevendo no arquivo", async () => {
      const resposta = await writeFile(
        "arquivo.txt",
        "Texto a ser inserido no arquivo"
      );

      expect(resposta).to.be.equal("ok");
    });
  });
});
