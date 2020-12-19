const sumTwoSmallestNums = require("../sumOfTwoSmallestPositiveNumbers");

const data = [
  [[19, 5, 42, 2, 77], 7],
  [[10, 343445353, 3453445, 3453545353453], 3453455],
  [[2, 9, 6, -1], 8],
  [[879, 953, 694, -847, 342, 221, -91, -723, 791, -587], 563],
  [[3683, 2902, 3951, -475, 1617, -2385], 4519],
  [[280, 134, 108], 242],
  [[280, 134, 108, 1], 109],
  [[321, 406, -176], 727],
  [[1, 1, 1, 1], 2],
  [[-1, -1, 1, 1], 2]
];

describe("sumTwoSmallestNums", () => {
  describe("Return sum of two smallest numbers from an array", () => {
    test.each(data)("sumTwoSmallestNums(%p) = %i", (arr, sum) => {
      let actual = sumTwoSmallestNums(arr);

      expect(actual).toEqual(sum);
    });
  });
});
