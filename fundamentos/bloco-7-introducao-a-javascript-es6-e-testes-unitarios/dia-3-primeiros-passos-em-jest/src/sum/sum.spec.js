const { sum } = require("./sum");

describe("Function sum correct result", () => {
  it("Expect sum(4,5) to be 9", () => {
    expect(sum(4, 5)).toBe(9);
  });

  it("Expect sum(0, 0) to be 0", () => {
    expect(sum(0, 0)).toBe(0);
  });

  it("Throw exception when entering a string", () => {
    expect(() => {
      sum(4, "5");
    }).toThrowError();
  });

  it("Throws exception error message", () => {
    expect(() => {
      sum(4, "5");
    }).toThrowError("parameters must be numbers");
  });
});
