const countPosSumNeg = require("../positiveCountNegativeSum");

const data = [
  [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15],
    [10, -65]
  ],
  [
    [92, 6, 73, -77, 81, -90, 99, 8, -85, 34],
    [7, -252]
  ],
  [
    [91, -4, 80, -73, -28],
    [2, -105]
  ],
  [[], []],
  [
    [69, 100, 28, 47, 53, -61, -24],
    [5, -85]
  ],
  [
    [5, 7, 9, -3, -7, 61, -24],
    [4, -34]
  ],
  [
    [98, 51, -19, -97],
    [2, -116]
  ],
  [
    [-42, 3, -51, -64, 69, 77, -20, -5, 68, -76],
    [4, -258]
  ]
];

describe("countPosSumNeg", () => {
  describe("Return an array of count of positive numbers and sum of negative numbers", () => {
    test.each(data)("countPosSumNeg(%p) = %p", (arr, result) => {
      let actual = countPosSumNeg(arr);

      expect(actual).toEqual(result);
    });
  });
});
