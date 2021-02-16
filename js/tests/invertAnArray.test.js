const invertArray = require("../invertAnArray");

const data = [
  [
    [1, 2, 3, 4, 5],
    [-1, -2, -3, -4, -5]
  ],
  [
    [1, -2, 3, -4, 5],
    [-1, 2, -3, 4, -5]
  ],
  [[], []],
  [[0], [0]]
];

describe("invertArray", () => {
  describe("Return with inverted values", () => {
    test.each(data)("invertArray(%p) = %p", (arr, result) => {
      let actual = invertArray(arr);

      expect(actual).toEqual(result);
    });
  });
});
