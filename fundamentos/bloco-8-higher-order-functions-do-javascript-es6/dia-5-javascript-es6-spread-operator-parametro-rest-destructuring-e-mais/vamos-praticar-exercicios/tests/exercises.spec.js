const rectangleArea = require('../src/exercise1');
const sum = require('../src/exercise2');

describe('trabalhando do spreed, rest, parametre defalut', () => {
  const rectangle1 = [1, 2];
  const rectangle2 = [3, 5];

  it('retorne a área dos 3 retângulos', () => {
    expect(rectangleArea(1,2, 3,5)).toBe(2, 15, 54);
  });

  it('retorne a soma de valores passados como paramentro', () => {
    expect(sum(1,2)).toBe(3);
    expect(sum(1,2,3)).toBe(6);
    expect(sum(1,2,3,4)).toBe(10);
    expect(sum(1,2,3,4,5)).toBe(15);
  });
});