const removeDups = require("../removeDuplicatesFromArray");

const data = [
  [
    ["John", "Taylor", "John"],
    ["John", "Taylor"]
  ],
  [
    ["John", "Taylor", "John", "john"],
    ["John", "Taylor", "john"]
  ],
  [
    ["javascript", "python", "python", "ruby", "javascript", "c", "ruby"],
    ["javascript", "python", "ruby", "c"]
  ],
  [
    [1, 2, 2, 2, 3, 2, 5, 2, 6, 6, 3, 7, 1, 2, 5],
    [1, 2, 3, 5, 6, 7]
  ],
  [
    ["#", "#", "%", "&", "#", "$", "&"],
    ["#", "%", "&", "$"]
  ],
  [
    [3, "Apple", 3, "Orange", "Apple"],
    [3, "Apple", "Orange"]
  ]
];

describe("removeDups", () => {
  describe("Return new array with distinct values from array input", () => {
    test.each(data)("removeDups(%p) = %p", (arr, result) => {
      let actual = removeDups(arr);

      expect(actual).toEqual(result);
    });
  });
});
