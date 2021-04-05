const splitCode = require("../splitItemCodes");

const data = [
  ["TEWA8392", ["TEWA", 8392]],
  ["MMU778", ["MMU", 778]],
  ["SRPE5532", ["SRPE", 5532]],
  ["SKU8977", ["SKU", 8977]],
  ["MCI5589", ["MCI", 5589]],
  ["WIEB3921", ["WIEB", 3921]]
];

describe("splitCode", () => {
  describe("Return an array containing alphabetic and numeric parts of input item code", () => {
    test.each(data)("splitCode(%p) = %p", (item, result) => {
      let actual = splitCode(item);

      expect(actual).toEqual(result);
    });
  });
});
