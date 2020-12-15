const check = require("../givenNumber");

const data = [
  [[1, 2, 3, 4, 5], 3, true],
  [[1, 1, 2, 1, 1], 3, false],
  [[1, 1, 2, 1, 5, 4, 7], 7, true],
  [[1, 1, 2, 1, 5, 4, 7], 8, false],
  [[5, 5, 5, 6], 5, true],
  [[], 5, false]
];

describe("check", () => {
  describe("Return boolean if an array contains a particular number", () => {
    test.each(data)("check(%p, %i) = %s", (arr, item, expected) => {
      let actual = check(arr, item);

      expect(actual).toEqual(expected);
    });
  });
});
