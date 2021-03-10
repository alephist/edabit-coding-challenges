const findSeat = require("../crowdedCarriageCapacity");

const data = [
  [20, [3, 5, 4, 2], 3],
  [1000, [50, 20, 80, 90, 100, 60, 30, 50, 80, 60], 0],
  [200, [35, 23, 40, 21, 38], -1],
  [200, [35, 23, 18, 10, 40], 2],
  [21, [6, 3, 7], 1],
  [11037, [1839, 0, 0], 0]
];

describe("findSeat", () => {
  describe("Return first index of the first carriage which holds 50% or less of its max capacity", () => {
    test.each(data)("findSeat(%i, %p) = %i", (n, arr, result) => {
      let actual = findSeat(n, arr);

      expect(actual).toEqual(result);
    });
  });
});
