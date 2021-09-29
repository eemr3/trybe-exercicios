const myFizzBuzz = require("./myFizzBuzz");

describe("FizzBuzz function expected behavior", () => {
  it("number divisible by 3 and 5 returns 'fizzbuzz'", () => {
    expect(myFizzBuzz(15)).toBe("fizzbuzz");
    expect(myFizzBuzz(30)).toBe("fizzbuzz");
    expect(myFizzBuzz(45)).toBe("fizzbuzz");
    expect(myFizzBuzz(60)).toBe("fizzbuzz");
  });

  it("number divisible by 3 returns 'fizz'", () => {
    expect(myFizzBuzz(3)).toBe("fizz");
    expect(myFizzBuzz(6)).toBe("fizz");
    expect(myFizzBuzz(9)).toBe("fizz");
    expect(myFizzBuzz(21)).toBe("fizz");
  });

  it("number divisible by 5 returns 'buzz'", () => {
    expect(myFizzBuzz(5)).toBe("buzz");
    expect(myFizzBuzz(10)).toBe("buzz");
    expect(myFizzBuzz(20)).toBe("buzz");
    expect(myFizzBuzz(70)).toBe("buzz");
  });

  it("number that is not divisible by 3 or 5 return 'number'", () => {
    expect(myFizzBuzz(2)).toBe(2);
    expect(myFizzBuzz(4)).toBe(4);
    expect(myFizzBuzz(13)).toBe(13);
    expect(myFizzBuzz(22)).toBe(22);
  });

  it("parameter that is not a number return 'false'", () => {
    expect(myFizzBuzz("15")).toBe(false);
    expect(myFizzBuzz("45")).toBe(false);
    expect(myFizzBuzz("foo")).toBe(false);
    expect(myFizzBuzz("bar")).toBe(false);
  });
});
