const makePlusFunction = require("../functionFactory");

const data = [
  [2, 0, 2],
  [2, 18, 20],
  [2, -1, 1],
  [5, 0, 5],
  [5, 12, 17],
  [5, -5, 0],
  [7, 0, 7],
  [7, 41, 48],
  [7, -117, -110],
  [10, 0, 10],
  [10, 1, 11],
  [10, -1, 9]
];

describe("makePlusFunction", () => {
  describe("Return sum of base number and new number argument", () => {
    test.each(data)("makePlusFunction(%i)(%i) = %i", (baseNum, num, result) => {
      let actual = makePlusFunction(baseNum)(num);

      expect(actual).toEqual(result);
    });
  });
});
