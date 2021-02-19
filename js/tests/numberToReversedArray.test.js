const reverseArr = require("../numberToReversedArray");

const data = [
  [1485979, [9, 7, 9, 5, 8, 4, 1]],
  [623478, [8, 7, 4, 3, 2, 6]],
  [12345, [5, 4, 3, 2, 1]],
  [202069, [9, 6, 0, 2, 0, 2]]
];

describe("reverseArr", () => {
  describe("Return an array with digits of input number in reverse order", () => {
    test.each(data)("reverseArr(%i) = %p", (num, result) => {
      let actual = reverseArr(num);

      expect(actual).toEqual(result);
    });
  });
});
