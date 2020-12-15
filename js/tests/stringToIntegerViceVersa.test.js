const { toInt, toStr } = require("../stringToIntegerViceVersa");

describe("toInt", () => {
  describe("Convert string to integer", () => {
    const data = [
      ["37", 37],
      ["113", 113],
      ["5", 5],
      ["5231", 5231]
    ];

    test.each(data)("toInt(%p) = %i", (str, expected) => {
      let actual = toInt(str);

      expect(actual).toEqual(expected);
    });
  });
});

describe("toStr", () => {
  describe("Convert integer to string", () => {
    const data = [
      [37, "37"],
      [113, "113"],
      [5, "5"],
      [5231, "5231"]
    ];

    test.each(data)("toStr(%i) = %p", (num, expected) => {
      let actual = toStr(num);

      expect(actual).toEqual(expected);
    });
  });
});
