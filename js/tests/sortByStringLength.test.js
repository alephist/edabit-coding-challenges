const sortByLength = require("../sortByStringLength");

const data = [
  [
    ["a", "ccc", "dddd", "bb"],
    ["a", "bb", "ccc", "dddd"]
  ],
  [
    ["apple", "pie", "shortcake"],
    ["pie", "apple", "shortcake"]
  ],
  [
    ["may", "april", "september", "august"],
    ["may", "april", "august", "september"]
  ],
  [["maybe"], ["maybe"]],
  [[], []]
];

describe("sortByLength", () => {
  describe("Return array of strings sorted by length", () => {
    test.each(data)("sortByLength(%p) = %p", (arr, result) => {
      let actual = sortByLength(arr);

      expect(actual).toEqual(result);
    });
  });
});
