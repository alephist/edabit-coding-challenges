const grabNumberSum = require("../grabTheNumbers");

const data = [
  ["aeiou5abc10", 15],
  ["75shugeb15hvyff15", 105],
  ["900uwu50uwuuwuuwu25uwu25", 1000],
  ["one1two2twenty20", 23],
  ["1s1s11", 13],
  ["75", 75],
  ["aeiou250abc10", 260]
];

describe("grabNumberSum", () => {
  describe("Return sum of numbers in the string", () => {
    test.each(data)("grabNumberSum(%p) = %i", (str, result) => {
      let actual = grabNumberSum(str);

      expect(actual).toEqual(result);
    });
  });
});
