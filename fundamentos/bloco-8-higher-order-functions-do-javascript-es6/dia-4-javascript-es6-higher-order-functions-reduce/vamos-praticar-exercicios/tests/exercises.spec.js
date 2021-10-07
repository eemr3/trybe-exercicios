const flatten = require('../src/exercise1');
const reduceNames = require("../src/exercise2");

describe('trabalhando com reduce', () => {
  it('retorne um array aprtir de uma matriz', () => {
    const expectedResultEx1 = ["1", "2", "3", true, 4, 5, 6];
    expect(flatten()).toEqual(expectedResultEx1);
  });

  it('retorne uma string apartir de um array de objetos', () => {
    const expectedResultEx2 =
      "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";
    expect(reduceNames()).toBe(expectedResultEx2);
  })
});