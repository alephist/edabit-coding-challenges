const squareDigits = require("../squareEveryDigit");

const data = [
  [9119, 811181],
  [8726, 6449436],
  [9763, 8149369],
  [2230, 4490],
  [2797, 4498149],
  [233, 499],
  [7437, 4916949],
  [2483, 416649],
  [5742, 2549164],
  [5636, 2536936],
  [841, 64161]
];

describe("squareDigits", () => {
  describe("Return the number with squared digits", () => {
    test.each(data)("squareDigits(%i) = %i", (num, result) => {
      let actual = squareDigits(num);

      expect(actual).toEqual(result);
    });
  });
});
