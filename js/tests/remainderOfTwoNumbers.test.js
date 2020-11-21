const getRemainder = require("../remainderOfTwoNumbers");

const data = [
  [7, 2, 1],
  [3, 4, 3],
  [-9, 45, -9],
  [5, 5, 0]
];

describe("getRemainder", () => {
  describe("Get remainder from two numbers", () => {
    test.each(data)("%i % %i = %i", (x, y, remainder) => {
      var actual = getRemainder(x, y);

      expect(actual).toEqual(remainder);
    });
  });
});
