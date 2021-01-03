const bomb = require("../findTheBomb");

const data = [
  ["There is a bomb.", "Duck!!!"],
  ["Hey, did you find it?", "There is no bomb, relax."],
  ["Hey, did you think ther is a bomb?", "Duck!!!"],
  ["This goes boom!!!", "There is no bomb, relax."],
  ["Hey, did you find the BoMb?", "Duck!!!"]
];

describe("bomb", () => {
  describe("Return message if string contains the word bomb", () => {
    test.each(data)("bomb(%p) = %p", (str, result) => {
      let actual = bomb(str);

      expect(actual).toEqual(result);
    });
  });
});
