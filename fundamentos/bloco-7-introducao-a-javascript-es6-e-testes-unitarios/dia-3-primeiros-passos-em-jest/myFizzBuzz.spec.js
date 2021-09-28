const myFizzBuzz = require("./myFizzBuzz");

describe("FizzBuzz function expected behavior", () => {
  it("number divisible by 3 and 5 returns 'fizzbuzz'", () => {
    expect(myFizzBuzz(15)).toBe("fizzbuzz");
    expect(myFizzBuzz(30)).toBe("fizzbuzz");
    expect(myFizzBuzz(45)).toBe("fizzbuzz");
  });

  it("number divisible by 3 returns 'fizz'", () => {
    expect(myFizzBuzz(3)).toBe("fizz");
    expect(myFizzBuzz(6)).toBe("fizz");
    expect(myFizzBuzz(9)).toBe("fizz");
  });
});
