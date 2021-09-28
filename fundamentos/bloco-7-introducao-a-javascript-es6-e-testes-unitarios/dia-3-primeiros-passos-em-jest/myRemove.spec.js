const myRemove = require("./myRemove");

const arrayNumber = [1, 2, 3, 4];

describe("Check remove item from an array", () => {
  it("Check the call myRemove([1, 2, 3, 4], 3)", () => {
    expect(myRemove(arrayNumber, 3)).not.toContain(3);
  });

  it("Check my Remote([1, 2, 3, 4], 3) does not return array [1, 2, 3, 4]", () => {
    expect([1, 2, 4]).toEqual(myRemove(arrayNumber, 3));
  });

  it("Check myRemove([1, 2, 3, 4], 5) returns the expected array", () => {
    expect(arrayNumber).toEqual(myRemove(arrayNumber, 5));
  });
});
