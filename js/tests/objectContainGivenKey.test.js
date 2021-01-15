const hasKey = require("../objectContainGivenKey");

const data = [
  [{ pot: 1, tot: 2, not: 3 }, "not", true],
  [{ craves: true, midnight: true, snack: true }, "morning", false],
  [{ a: 44, b: 45, c: 46 }, "d", false],
  [{ a: "z", b: "y", c: "x" }, "c", true]
];

describe("hasKey", () => {
  describe("Return true if object contains specified key", () => {
    test.each(data)("hasKey(%o, %p) = %s", (obj, key, result) => {
      let actual = hasKey(obj, key);

      expect(actual).toEqual(result);
    });
  });
});
