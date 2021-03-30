const identicalFilter = require("../filterRepeatingCharacterStrings");

const data = [
  [
    ["aaaaaa", "bc", "d", "eeee", "xyz"],
    ["aaaaaa", "d", "eeee"]
  ],
  [
    ["88", "999", "22", "545", "133"],
    ["88", "999", "22"]
  ],
  [["xxxxo", "oxo", "xox", "ooxxoo", "oxo"], []],
  [
    ["aa", "bb", "cc", "dd", "ee"],
    ["aa", "bb", "cc", "dd", "ee"]
  ],
  [["aba", "bcb", "abb", "bcc", "eee"], ["eee"]],
  [
    ["1", "2", "3"],
    ["1", "2", "3"]
  ]
];

describe("identicalFilter", () => {
  describe("Return strings with repeating identical characters", () => {
    test.each(data)("identicalFilter(%p) = %p", (arr, result) => {
      let actual = identicalFilter(arr);

      expect(actual).toEqual(result);
    });
  });
});
