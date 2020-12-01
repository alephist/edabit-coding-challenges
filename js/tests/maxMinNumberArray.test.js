const diffMaxMin = require("../maxMinNumberArray");

const data = [
  [[10, 4, 1, 2, 8, 91], 90],
  [[-70, 43, 34, 54, 22], 124]
];

describe("diffMaxMin", () => {
  describe("Return difference of biggest and smallest numbers from an array", () => {
    test.each(data)("diffMaxMin(%p) = %i", (arr, expected) => {
      var actual = diffMaxMin(arr);

      expect(actual).toEqual(expected);
    });
  });
});
