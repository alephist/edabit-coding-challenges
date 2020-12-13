const repeat = require("../repeatingLettersNthTimes");

const data = [
  ["mice", 5, "mmmmmiiiiiccccceeeee"],
  ["hello", 3, "hhheeellllllooo"],
  ["stop", 1, "stop"],
  ["tomato", 2, "ttoommaattoo"]
];

describe("repeat", () => {
  describe("Return string with repeated charcters nth times", () => {
    test.each(data)("repeat(%p, %i) = %p", (str, num, result) => {
      var actual = repeat(str, num);

      expect(actual).toEqual(result);
    });
  });
});
