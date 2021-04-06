const alphNum = require("../numberedAlphabet");

const data = [
  ["ABCD", "0 1 2 3"],
  ["BCDA", "1 2 3 0"],
  ["AAA", "0 0 0"],
  ["XYZ", "23 24 25"]
];

describe("alphNum", () => {
  describe("Return string of numbers corresponding letter of the alphabet from input string", () => {
    test.each(data)("alphNum(%p) = %p", (str, result) => {
      let actual = alphNum(str);

      expect(actual).toEqual(result);
    });
  });
});
