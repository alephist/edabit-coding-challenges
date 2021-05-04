const toStarShorthand = require("../starShorthand");

const data = [
  ["abbccc", "ab*2c*3"],
  ["haaaappyyyyy", "ha*4p*2y*5"],
  ["77777geff", "7*5gef*2"],
  ["11223344", "1*22*23*24*2"],
  ["abc", "abc"],
  ["", ""]
];

describe("toStarShorthand", () => {
  describe("Return star shorthand version of a string", () => {
    test.each(data)("toStarShorthand(%p) = %p", (str, result) => {
      let actual = toStarShorthand(str);

      expect(actual).toEqual(result);
    });
  });
});
