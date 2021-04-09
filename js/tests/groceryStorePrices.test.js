const getPrices = require("../groceryStorePrices");

const data = [
  [
    ["ice cream ($5.99)", "banana ($0.20)", "sandwich ($8.50)", "soup ($1.99)"],
    [5.99, 0.2, 8.5, 1.99]
  ],
  [["salad ($4.99)"], [4.99]],
  [
    ["artichokes ($1.99)", "rotiserrie chicken ($5.99)", "gum ($0.75)"],
    [1.99, 5.99, 0.75]
  ],
  [
    ["pizza ($2.99)", "shampoo ($15.75)", "trash bags ($15.00)"],
    [2.99, 15.75, 15]
  ]
];

describe("getPrices", () => {
  describe("Return an array of prices in float format", () => {
    test.each(data)("getPrices(%p) = %p", (arr, result) => {
      let actual = getPrices(arr);

      expect(actual).toEqual(result);
    });
  });
});
