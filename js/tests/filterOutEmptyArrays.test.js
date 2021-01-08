const removeEmptyArrays = require("../filterOutEmptyArrays");

const data = [
  [
    ["a", "b", []],
    ["a", "b"]
  ],
  [
    [1, 2, [], 4],
    [1, 2, 4]
  ],
  [[[], [], [], []], []],
  [
    [1, 2, 3, 4],
    [1, 2, 3, 4]
  ],
  [
    [1, [], [], 4],
    [1, 4]
  ]
];

describe("removeEmptyArrays", () => {
  describe("Remove empty arrays from an array", () => {
    test.each(data)("removeEmptyArrays(%o) = %p", (arr, result) => {
      let actual = removeEmptyArrays(arr);

      expect(actual).toEqual(result);
    });
  });
});
