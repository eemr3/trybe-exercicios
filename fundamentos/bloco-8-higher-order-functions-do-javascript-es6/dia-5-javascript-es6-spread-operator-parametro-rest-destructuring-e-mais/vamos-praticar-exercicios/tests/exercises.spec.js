const rectangleArea = require('../src/exercise1');

describe('trabalhando do spreed, rest, parametre defalut', () => {
  const rectangle1 = [1, 2];
  const rectangle2 = [3, 5];
  it('retorne a área dos 3 retângulos', () => {
    expect(rectangleArea(1,2, 3,5)).toBe(2, 15, 54);
  });
});