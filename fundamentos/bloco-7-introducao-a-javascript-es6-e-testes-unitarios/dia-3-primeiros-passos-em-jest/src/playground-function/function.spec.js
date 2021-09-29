const { encode, decode } = require("./function");

describe("Requirement four", () => {
  it("check if encode is a function", () => {
    expect(typeof encode).toBe("function");
  });

  it("check if decode is a function", () => {
    expect(typeof decode).toBe("function");
  });

  it("check if vowels 'a, e, i, o, u' are converted to '1, 2, 3, 4 and 5'", () => {
    expect(encode("carteira")).toBe("c1rt23r1");
    expect(encode("universidade")).toBe("5n3v2rs3d1d2");
    expect(encode("borboleta")).toBe("b4rb4l2t1");
  });

  it("numbers '1, 2, 3, 4 and 5' are converted into vowels 'a, e, i, o, u'", () => {
    expect(decode("c1rt23r1")).toBe("carteira");
    expect(decode("5n3v2rs3d1d2")).toBe("universidade");
    expect(decode("b4rb4l2t1")).toBe("borboleta");
  });
});
