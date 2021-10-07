const flatten = require('../src/exercise1');

describe('trabalhando com reduce', () => {
  it('retorne um array aprtir de uma matriz', () => {
    const expectedResultEx1 = ["1", "2", "3", true, 4, 5, 6];
    expect(flatten()).toEqual(expectedResultEx1);
  });
});