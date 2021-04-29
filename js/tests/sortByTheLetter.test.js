const sortByLetter = require("../sortByTheLetter");

const data = [
  [
    ["932c", "832u32", "2344b"],
    ["2344b", "932c", "832u32"]
  ],
  [
    ["99a", "78b", "c2345", "11d"],
    ["99a", "78b", "c2345", "11d"]
  ],
  [
    ["572z", "5y5", "304q2"],
    ["304q2", "5y5", "572z"]
  ],
  [[], []]
];

describe("sortByLetter", () => {
  describe("Return array of strings sorted in alphabetic ascending order", () => {
    test.each(data)("sortByLetter(%p) = %p", (arr, result) => {
      let actual = sortByLetter(arr);

      expect(actual).toEqual(result);
    });
  });
});
