const birthdayCakeCandles = require("../tallestBirthdayCakeCandles");

const data = [
  [[4, 4, 1, 3], 2],
  [[3, 2, 1, 3], 2],
  [[82, 49, 82, 82, 41, 82, 15, 63, 38, 25], 4],
  [[18, 90, 90, 13, 90, 75, 90, 8, 90, 43], 5]
];

describe("birthdayCakeCandles", () => {
  describe("Return number of tallest candles", () => {
    test.each(data)("birthdayCakeCandles(%p) = %i", (candles, result) => {
      let actual = birthdayCakeCandles(candles);

      expect(actual).toEqual(result);
    });
  });
});
