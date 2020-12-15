const shouldServeDrinks = require("../drinks");

const data = [
  [17, true, false],
  [30, true, false],
  [24, false, true],
  [18, false, true],
  [3, false, false]
];

describe("shouldServeDrinks", () => {
  describe("Return boolean whether the bartender should serve drinks", () => {
    test.each(data)(
      "shouldServeDrinks(%i, %s) = %s",
      (age, onBreak, expected) => {
        let actual = shouldServeDrinks(age, onBreak);

        expect(actual).toEqual(expected);
      }
    );
  });
});
