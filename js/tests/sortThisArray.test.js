const ascDesNone = require("../sortThisArray");

const data = [
  [[4, 3, 2, 1], "Asc", [1, 2, 3, 4]],
  [[7, 8, 11, 66], "Des", [66, 11, 8, 7]],
  [[1, 2, 3, 4], "None", [1, 2, 3, 4]],
  [[1, 0, 1, 0], "Asc", [0, 0, 1, 1]],
  [[1, 2, 2, 2, 2, 2, 2], "Des", [2, 2, 2, 2, 2, 2, 1]],
  [[9, 7, 43, 11, 16, 111, 19], "Asc", [7, 9, 11, 16, 19, 43, 111]]
];

describe("ascDesNone", () => {
  describe("Return array of numbers based on str condition", () => {
    test.each(data)("ascDesNone(%p, %s) = %p", (arr, str, result) => {
      let actual = ascDesNone(arr, str);

      expect(actual).toEqual(result);
    });
  });
});
