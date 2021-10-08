const flatten = require("../src/exercise1");
const reduceNames = require("../src/exercise2");
const averageAge = require("../src/exercise3");
const longestNamedBook = require("../src/exercise4");
const containsA = require("../src/exercise5");

describe("trabalhando com reduce", () => {
  it("retorne um array aprtir de uma matriz", () => {
    const expectedResultEx1 = ["1", "2", "3", true, 4, 5, 6];
    expect(flatten()).toEqual(expectedResultEx1);
  });

  it("retorne uma string apartir de um array de objetos", () => {
    const expectedResultEx2 =
      "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";
    expect(reduceNames()).toBe(expectedResultEx2);
  });

  it("caucule a média das idades dos autores", () => {
    const expectedResultEx3 = 43;
    expect(averageAge()).toBe(expectedResultEx3);
  });

  it("retorne o livro com o maior nome", () => {
    const expectedResultEx4 = {
      id: 1,
      name: "As Crônicas de Gelo e Fogo",
      genre: "Fantasia",
      author: {
        name: "George R. R. Martin",
        birthYear: 1948,
      },
      releaseYear: 1991,
    };
    expect(longestNamedBook()).toEqual(expectedResultEx4);
  });

  it('retorne quantas letra "A" existem no array de nomes. Não importando se maiúscula ou minúscula', () => {
    expect(containsA()).toBe(20);
  });
});
