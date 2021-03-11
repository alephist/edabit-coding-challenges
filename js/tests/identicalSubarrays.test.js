const countIdentical = require("../identicalSubarrays");

const data = [
  [[[33, 33], [5], ["a", "a"], [2, 2, 2], [1, 2, 2], [3, 1]], 4],
  [[[1], [2], [3], [4]], 4],
  [
    [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 4]
    ],
    1
  ],
  [
    [
      ["@", "@", "@", "@"],
      [2, 3],
      [3, 4],
      [4, 4]
    ],
    2
  ]
];

describe("countIdentical", () => {
  describe("Return count of subarrays with identical elements", () => {
    test.each(data)("countIdentical(%o) = %i", (arr, result) => {
      let actual = countIdentical(arr);

      expect(actual).toEqual(result);
    });
  });
});
