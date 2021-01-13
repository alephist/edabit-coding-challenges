const spelling = require("../spellingItOut");

const data = [
  ["bee", ["b", "be", "bee"]],
  ["cake", ["c", "ca", "cak", "cake"]],
  ["happy", ["h", "ha", "hap", "happ", "happy"]],
  ["eagerly", ["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"]],
  ["believe", ["b", "be", "bel", "beli", "belie", "believ", "believe"]]
];

describe("spelling", () => {
  describe("Return consecutively spelled out word", () => {
    test.each(data)("spelling(%p) = %p", (str, result) => {
      let actual = spelling(str);

      expect(actual).toEqual(result);
    });
  });
});
