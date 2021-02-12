const redundant = require("../redundantFunction");

describe("redundant", () => {
  test("Return a function that returns a string", () => {
    const f1 = redundant("apple");
    const f2 = redundant("pear");
    const f3 = redundant("");

    expect(f1()).toEqual("apple");
    expect(f2()).toEqual("pear");
    expect(f3()).toEqual("");
  });
});
