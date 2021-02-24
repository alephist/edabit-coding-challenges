const sumCommon = require("../threeArrays");

const data = [
  [[1, 2, 3], [5, 3, 2], [7, 3, 2], 5],
  [[1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2], 7],
  [[1], [1], [1], 1],
  [[1], [1], [2], 0]
];

describe("sumCommon", () => {
  describe("Return sum of integers which are common in all three arrays", () => {
    test.each(data)(
      "sumCommon(%p, %p, %p) = %i",
      (arr1, arr2, arr3, result) => {
        let actual = sumCommon(arr1, arr2, arr3);

        expect(actual).toEqual(result);
      }
    );
  });
});
