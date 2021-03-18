const convertToBinary = require("../transformWordsToBinaryStrings");

const data = [
  ["house", "01110"],
  ["excLAIM", "0100000"],
  ["moon", "0111"],
  ["MOOn", "0111"],
  ["topsyTurvy", "1111111111"]
];

describe("convertToBinary", () => {
  describe("Return binary string from input string", () => {
    test.each(data)("convertToBinary(%p) = %p", (str, result) => {
      let actual = convertToBinary(str);

      expect(actual).toEqual(result);
    });
  });
});
