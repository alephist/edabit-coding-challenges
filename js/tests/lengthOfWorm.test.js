const wormLength = require("../lengthOfWorm");

const data = [
  ["----------", "100 mm."],
  ["", "invalid"],
  ["---_-___---_", "invalid"],
  ["------", "60 mm."],
  ["iwheguawhpvpaiehpiuwwega", "invalid"],
  ["QWERTYUIOPASDFGHJKL", "invalid"],
  ["------------", "120 mm."]
];

describe("wormLength", () => {
  describe("Return length of worm in millimeters", () => {
    test.each(data)("wormLength(%p) = %p", (worm, result) => {
      let actual = wormLength(worm);

      expect(actual).toEqual(result);
    });
  });
});
