const { expect } = require("chai");

const validate = require("../services/validate_number");

describe("Validar numero negativo ou positivo", () => {
  describe("validar se é negativo/positivo/neutro", () => {
    it("caso numero negativo", () => {
      const resposta = validate(-2);

      expect(resposta).to.be.equal("negativo");
    });

    it("caso numero positivo", () => {
      const resposta = validate(1);

      expect(resposta).to.be.equal("positivo");
    });

    it("caso numbero negativo", () => {
      const resposta = validate(0);
      expect(resposta).to.be.equal("neutro");
    });
  });

  describe("validar se não é numbero", () => {
    it("caso não seja um numero", () => {
      const resposta = validate("3a");

      expect(resposta).to.be.equal("o valor deve ser um número");
    });
  });
});
