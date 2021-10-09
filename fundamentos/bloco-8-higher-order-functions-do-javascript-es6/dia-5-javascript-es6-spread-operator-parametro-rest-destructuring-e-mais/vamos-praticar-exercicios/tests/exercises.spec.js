const rectangleArea = require("../src/exercise1");
const sum = require("../src/exercise2");
const personLikes = require("../src/exercise3");
const filterPeople = require("../src/exercise4");
const swap = require('../src/exercise5');
const toObject = require("../src/exercise6");

describe("trabalhando do spreed, rest, parametre defalut", () => {
  it("retorne a área dos 3 retângulos", () => {
    expect(rectangleArea(1, 2)).toBe(2);
    expect(rectangleArea(3, 5)).toBe(15);
    expect(rectangleArea(6, 9)).toBe(54);
  });

  it("retorne a soma de valores passados como paramentro", () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(1, 2, 3)).toBe(6);
    expect(sum(1, 2, 3, 4)).toBe(10);
    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });

  it("retone uma string contendo dados dos objetos passados como parametro", () => {
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

    expect(personLikes(alex)).toBe(
      "Alex is 26 years old and likes fly fishing."
    );
    expect(personLikes(gunnar)).toBe(
      "Gunnar is 30 years old and likes hiking, scuba diving, taking pictures."
    );
  });
  const people = [
    {
      name: "Nicole",
      bornIn: 1992,
      nationality: "Australian",
    },
    {
      name: "Harry",
      bornIn: 2008,
      nationality: "Australian",
    },
    {
      name: "Toby",
      bornIn: 1901,
      nationality: "Australian",
    },
    {
      name: "Frida",
      bornIn: 1960,
      nationality: "Dannish",
    },
    {
      name: "Fernando",
      bornIn: 2001,
      nationality: "Brazilian",
    },
  ];
  it("todas as pessoas australianas que nasceram no século 20", () => {
    expect(filterPeople(people)).toEqual([
      { name: "Nicole", bornIn: 1992, nationality: "Australian" },
      { name: "Toby", bornIn: 1901, nationality: "Australian" },
    ]);
  });

  it('retorna um novo array com inversão de lado do primeiro e terceiro elemento', () => {
    expect(swap([1,2,3])).toEqual([3,2,1]);
  });

  it('', () => {
    const palio = ["Palio", "Fiat", 2019];
    const shelbyCobra = ["Shelby Cobra", "Ford", 1963];
    const chiron = ["Chiron", "Bugatti", 2016];
    expect(toObject(palio)).toEqual({ modelo: 'Palio', marca: 'Fiat', ano: 2019 });
    expect(toObject(shelbyCobra)).toEqual({ modelo: 'Shelby Cobra', marca: 'Ford', ano: 1963 });
    expect(toObject(chiron)).toEqual({ modelo: 'Chiron', marca: 'Bugatti', ano: 2016 });
  });
});
