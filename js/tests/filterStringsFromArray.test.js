const filterArray = require("../filterStringsFromArray");

const data = [
  [
    [1, 2, "a", "b"],
    [1, 2]
  ],
  [
    [1, "a", "b", 0, 15],
    [1, 0, 15]
  ],
  [
    [1, 2, "aasf", "1", "123", 123],
    [1, 2, 123]
  ],
  [
    ["jsyt", 4, "yt", 6],
    [4, 6]
  ],
  [
    ["r", 5, "y", "e", 8, 9],
    [5, 8, 9]
  ],
  [["a", "e", "i", "o", "u"], []],
  [
    [4, "z", "f", 5],
    [4, 5]
  ],
  [["abc", 123], [123]],
  [["$%^", 567, "&&&"], [567]],
  [
    ["w", "r", "u", 43, "s", "a", 76, "d", 88],
    [43, 76, 88]
  ]
];

describe("filterArray", () => {
  describe("Return new array without strings", () => {
    test.each(data)("filterArray(%p) = %p", (arr, result) => {
      let actual = filterArray(arr);

      expect(actual).toEqual(result);
    });
  });
});
