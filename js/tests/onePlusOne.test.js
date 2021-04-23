const wordedMath = require("../onePlusOne");

const data = [
  ["One plus one", "Two"],
  ["zero Plus one", "One"],
  ["one minus one", "Zero"]
];

describe("wordedMath", () => {
  describe("Return output of math expression in string format", () => {
    test.each(data)("wordedMath(%p) = %p", (expr, result) => {
      let actual = wordedMath(expr);

      expect(actual).toEqual(result);
    });
  });
});
