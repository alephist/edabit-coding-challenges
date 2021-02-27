const nextInLine = require("../standInLine");

const data = [
  [[5, 6, 7, 8, 9], 1, [6, 7, 8, 9, 1]],
  [[7, 6, 3, 23, 17], 10, [6, 3, 23, 17, 10]],
  [[1, 10, 20, 42], 6, [10, 20, 42, 6]],
  [NaN, 6, "No array has been selected"],
  [[0], 1, [1]]
];

describe("nextInLine", () => {
  describe("Return array with input num inserted at the end and inital first value removed", () => {
    test.each(data)("nextInLine(%p, %i) => %p", (arr, num, result) => {
      let actual = nextInLine(arr, num);

      expect(actual).toEqual(result);
    });
  });
});
