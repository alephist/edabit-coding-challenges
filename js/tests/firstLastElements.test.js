const firstLast = require("../firstLastElements");

const data = [
  [
    [5, 10, 15, 20, 25],
    [5, 25]
  ],
  [
    ["edabit", 13, null, false, true],
    ["edabit", true]
  ],
  [
    [undefined, 4, "6", "hello", null],
    [undefined, null]
  ],
  [
    ["hello", "edabit", "dot", "com"],
    ["hello", "com"]
  ],
  [
    [3, 2, 1],
    [3, 1]
  ],
  [
    ["one", "two"],
    ["one", "two"]
  ],
  [
    [false, false, true, false, false, true, false],
    [false, false]
  ]
];

describe("firstLast", () => {
  describe("Return the first and last elements in a new array", () => {
    test.each(data)("firstLast(%p) = %p", (arr, expected) => {
      let actual = firstLast(arr);

      expect(actual).toEqual(expected);
    });
  });
});
