const rectangleArea = require('../src/exercise1');
const sum = require('../src/exercise2');
const personLikes = require("../src/exercise3");

describe('trabalhando do spreed, rest, parametre defalut', () => {
  it('retorne a área dos 3 retângulos', () => {
    expect(rectangleArea(1,2, 3,5)).toBe(2, 15, 54);
  });

  it('retorne a soma de valores passados como paramentro', () => {
    expect(sum(1,2)).toBe(3);
    expect(sum(1,2,3)).toBe(6);
    expect(sum(1,2,3,4)).toBe(10);
    expect(sum(1,2,3,4,5)).toBe(15);
  });

  it('retone uma string contendo dados dos objetos passados como parametro', () => {
    const alex = {
      name: "Alex",
      age: 26,
      likes: ["fly fishing"],
      nationality: "Australian",
    };

    const gunnar = {
      name: "Gunnar",
      age: 30,
      likes: ["hiking", "scuba diving", "taking pictures"],
      nationality: "Icelandic",
    };

    expect(personLikes(alex)).toBe("Alex is 26 years old and likes fly fishing.");
    expect(
      personLikes(gunnar)
    ).toBe(
      "Gunnar is 30 years old and likes hiking, scuba diving, taking pictures."
    );
  });
});