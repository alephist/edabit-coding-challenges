const hashPlusCount = require("../hashesAndPluses");

const data = [
  ["####", [4, 0]],
  ["#", [1, 0]],
  ["+++++++", [0, 7]],
  ["++", [0, 2]],
  ["#+#+", [2, 2]],
  ["###+", [3, 1]],
  ["##+++#", [3, 3]],
  ["#+++#+#++#", [4, 6]],
  ["", [0, 0]]
];

describe("hashPlusCount", () => {
  describe("Return number of hashes and pluses in a string", () => {
    test.each(data)("hashPlusCount(%s) = %p", (str, result) => {
      let actual = hashPlusCount(str);

      expect(actual).toEqual(result);
    });
  });
});
