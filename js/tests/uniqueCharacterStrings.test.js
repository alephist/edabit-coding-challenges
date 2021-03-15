const filterUnique = require("../uniqueCharacterStrings");

const data = [
  [["abb", "abc", "abcdb", "aea", "bbb"], ["abc"]],
  [["88", "999", "989", "9988", "9898"], []],
  [
    ["ABCDE", "DDEB", "BED", "CCA", "BAC"],
    ["ABCDE", "BED", "BAC"]
  ],
  [["qrrs", "srrq", "qqrs", "qq", "ss", "rs"], ["rs"]],
  [
    ["abab", "ba", "ab", "cc"],
    ["ba", "ab"]
  ]
];

describe("filterUnique", () => {
  describe("Return strings with unique characters", () => {
    test.each(data)("filterUnique(%p) = %p", (arr, result) => {
      let actual = filterUnique(arr);

      expect(actual).toEqual(result);
    });
  });
});
