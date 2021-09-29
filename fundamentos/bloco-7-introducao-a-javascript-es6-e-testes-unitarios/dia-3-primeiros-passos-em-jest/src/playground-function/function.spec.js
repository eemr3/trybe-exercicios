const { encode, decode } = require("./function");

describe("Requirement four", () => {
  it("check if encode is a function", () => {
    expect(typeof encode).toBe("function");
  });

  it("check if decode is a function", () => {
    expect(typeof decode).toBe("function");
  });
});
