const isIsogram = require("../isWordAnIsogram");

const data = [
  ["Algorism", true],
  ["PasSword", false],
  ["Dermatoglyphics", true],
  ["Cat", true],
  ["Filmography", true],
  ["Consecutive", false],
  ["Bankruptcies", true],
  ["Unforgivable", true],
  ["Unpredictably", true],
  ["Moose", false]
];

describe("isIsogram", () => {
  describe("Return boolean whether input string is an isogram", () => {
    test.each(data)("isIsogram(%p) = %s", (str, result) => {
      let actual = isIsogram(str);

      expect(actual).toEqual(result);
    });
  });
});
