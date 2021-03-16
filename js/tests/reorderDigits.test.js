const reorderDigits = require("../reorderDigits");

const data = [
  [[515, 341, 98, 44, 211], "asc", [155, 134, 89, 44, 112]],
  [[515, 341, 98, 44, 211], "desc", [551, 431, 98, 44, 211]],
  [[63251, 78221], "asc", [12356, 12278]],
  [[63251, 78221], "desc", [65321, 87221]],
  [[1, 2, 3, 4], "asc", [1, 2, 3, 4]],
  [[1, 2, 3, 4], "desc", [1, 2, 3, 4]],
  [[12, 21, 15, 51], "asc", [12, 12, 15, 15]],
  [[12, 21, 15, 51], "desc", [21, 21, 51, 51]]
];

describe("reorderDigits", () => {
  describe("Return array of numbers reordered by digits based on input direction", () => {
    test.each(data)("reorderDigits(%p, %p) = %p", (arr, direction, result) => {
      let actual = reorderDigits(arr, direction);

      expect(actual).toEqual(result);
    });
  });
});
