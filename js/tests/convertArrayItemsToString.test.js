const parseArray = require("../convertArrayItemsToString");

const data = [
  [
    [1, 2, "a", "b"],
    ["1", "2", "a", "b"]
  ],
  [
    [1, 2, 3, 17, 24, 3, "a", "123b"],
    ["1", "2", "3", "17", "24", "3", "a", "123b"]
  ],
  [
    ["abc", 123, "def", 456],
    ["abc", "123", "def", "456"]
  ],
  [[], []]
];

describe("parseArray", () => {
  describe("Return array of strings", () => {
    test.each(data)("parseArray(%p) = %p", (arr, result) => {
      let actual = parseArray(arr);

      expect(actual).toEqual(result);
    });
  });
});
